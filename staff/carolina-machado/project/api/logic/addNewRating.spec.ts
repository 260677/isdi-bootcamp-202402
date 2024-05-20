//@ts-nocheck
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { User, Wine, Market } from '../data/index.ts';
import logic from './index.ts'
import { expect } from 'chai';
import { errors } from 'com';

dotenv.config();

const { Types: { ObjectId } } = mongoose;
const { NotFoundError } = errors;

describe('addNewRating', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    beforeEach(() => 
        Promise.all([
            User.deleteMany(),
            Wine.deleteMany(),
            Market.deleteMany(),
        ])
    );

    it('adds a new rating of 5 to a wine that already had a rating of 4, resulting in a new average rating of 4.5', async () => {
        const user = await User.create({ name: 'Carol Machado', email: 'carol@mac.com', password: '123carol123' });
        
        const wine1 = await Wine.create({ image: `https://images2.imgbox.com/dd/94/DpvEjiXU_o.png`, title: 'Raimat Clamor', description: 'Young and fresh, typically from Costers del Segre, cherry notes', type: 'red', price: 6.45, rates: [4], averageRating: 4 });

        const market1 = await Market.create({ title: 'Condis Taulat', address: 'Calle Taulat, 185', location: { type: 'Point', coordinates: [41.4020559, 2.2041401] }, wines: [wine1._id] });
        const market2 = await Market.create({ title: 'Condis Entença', address: 'Calle Entença, 85', location: { type: 'Point', coordinates: [41.3794426, 2.1322796] }, wines: [wine1._id] });


        console.log('new ID:', wine1._id)
        const newAverageRating = await logic.addNewRating(wine1._id.toString(), 5);

        const updatedWine = await Wine.findById(wine1._id).lean().exec();
        
        expect(newAverageRating).to.equal(4.5);
        expect(updatedWine.averageRating).to.equal(4.5);
        expect(updatedWine.rates).to.include(5);
    });

    after(() => mongoose.disconnect());
});