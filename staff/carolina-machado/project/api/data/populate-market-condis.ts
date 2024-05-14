import mongoose from 'mongoose'

import { User, Wine, Point, Market, Review } from '.'
import { ObjectId } from 'mongodb'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Point.deleteMany())
    .then(() => Market.deleteMany())
    .then(() => {
        
        const point3 = new Point({ type: 'Point', coordinates: [41.4020559,2.2080025] })
        const point6 = new Point({ type: 'Point', coordinates: [41.4029903,2.2035441] })
        const point8 = new Point({ type: 'Point', coordinates: [41.3794451,2.1327317] })
        const point9 = new Point({ type: 'Point', coordinates: [41.3790909,2.1473229] })
        const point10 = new Point({ type: 'Point', coordinates: [41.3796237,2.128687] })
        
        return Promise.all([
            
            Market.create({ title: 'Condis Taulat', address: 'Calle Taulat, 185', location: point3, wines: ['663f71ba25f835af4adf8392', '663f71ba25f835af4adf8391', '663f71ba25f835af4adf8390', '663f71ba25f835af4adf838f', '663f71ba25f835af4adf838e', '663f71ba25f835af4adf838d', '663f71ba25f835af4adf838c', '663f71ba25f835af4adf838b', '663f71ba25f835af4adf838a', '663f71ba25f835af4adf8389', '663f71ba25f835af4adf8388', '663f71ba25f835af4adf8387', '663f71ba25f835af4adf8386', '663f71ba25f835af4adf8385', '663f71ba25f835af4adf8384', '663f71ba25f835af4adf8382', '663f71ba25f835af4adf8381', '663f71ba25f835af4adf837f', '663f71ba25f835af4adf837e', '663f71ba25f835af4adf837d'] }),
            
            
            Market.create({ title: 'Condis Bilbao', address: 'Calle Bilbao, 53', location: point6, wines: ['663f71ba25f835af4adf8392', '663f71ba25f835af4adf8391', '663f71ba25f835af4adf8390', '663f71ba25f835af4adf838f', '663f71ba25f835af4adf838e', '663f71ba25f835af4adf838d', '663f71ba25f835af4adf838c', '663f71ba25f835af4adf838b', '663f71ba25f835af4adf838a', '663f71ba25f835af4adf8389', '663f71ba25f835af4adf8388', '663f71ba25f835af4adf8387', '663f71ba25f835af4adf8386', '663f71ba25f835af4adf8385', '663f71ba25f835af4adf8384', '663f71ba25f835af4adf8382', '663f71ba25f835af4adf8381', '663f71ba25f835af4adf837f', '663f71ba25f835af4adf837e', '663f71ba25f835af4adf837d']  }),
            
            Market.create({ title: 'Condis Entença', address: 'Calle Entença, 85', location: point8, wines: ['663f71ba25f835af4adf8392', '663f71ba25f835af4adf8391', '663f71ba25f835af4adf8390', '663f71ba25f835af4adf838f', '663f71ba25f835af4adf838e', '663f71ba25f835af4adf838d', '663f71ba25f835af4adf838c', '663f71ba25f835af4adf838b', '663f71ba25f835af4adf838a', '663f71ba25f835af4adf8389', '663f71ba25f835af4adf8388', '663f71ba25f835af4adf8387', '663f71ba25f835af4adf8386', '663f71ba25f835af4adf8385', '663f71ba25f835af4adf8384', '663f71ba25f835af4adf8382', '663f71ba25f835af4adf8381', '663f71ba25f835af4adf837f', '663f71ba25f835af4adf837e', '663f71ba25f835af4adf837d']  }),
            
            Market.create({ title: 'Condis Floridablanca', address: 'Calle Floridablanca, 96', location: point9, wines: ['663f71ba25f835af4adf8392', '663f71ba25f835af4adf8391', '663f71ba25f835af4adf8390', '663f71ba25f835af4adf838f', '663f71ba25f835af4adf838e', '663f71ba25f835af4adf838d', '663f71ba25f835af4adf838c', '663f71ba25f835af4adf838b', '663f71ba25f835af4adf838a', '663f71ba25f835af4adf8389', '663f71ba25f835af4adf8388', '663f71ba25f835af4adf8387', '663f71ba25f835af4adf8386', '663f71ba25f835af4adf8385', '663f71ba25f835af4adf8384', '663f71ba25f835af4adf8382', '663f71ba25f835af4adf8381', '663f71ba25f835af4adf837f', '663f71ba25f835af4adf837e', '663f71ba25f835af4adf837d']  }),
            
            Market.create({ title: 'Condis Llança', address: 'Calle de Llança, 48', location: point10, wines: ['663f71ba25f835af4adf8392', '663f71ba25f835af4adf8391', '663f71ba25f835af4adf8390', '663f71ba25f835af4adf838f', '663f71ba25f835af4adf838e', '663f71ba25f835af4adf838d', '663f71ba25f835af4adf838c', '663f71ba25f835af4adf838b', '663f71ba25f835af4adf838a', '663f71ba25f835af4adf8389', '663f71ba25f835af4adf8388', '663f71ba25f835af4adf8387', '663f71ba25f835af4adf8386', '663f71ba25f835af4adf8385', '663f71ba25f835af4adf8384', '663f71ba25f835af4adf8382', '663f71ba25f835af4adf8381', '663f71ba25f835af4adf837f', '663f71ba25f835af4adf837e', '663f71ba25f835af4adf837d']  }),
            
        ]);
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)