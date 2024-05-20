import mongoose from 'mongoose'

import { User, Wine, Point, Market, Review } from '.'
import { ObjectId } from 'mongodb'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Point.deleteMany())
    .then(() => Market.deleteMany())
    .then(() => {
        const point1 = new Point({ type: 'Point', coordinates: [41.380914,2.1506411] })
        const point2 = new Point({ type: 'Point', coordinates: [41.376267,2.1137611] })
        const point5 = new Point({ type: 'Point', coordinates: [41.4065503,2.2100329] })
        const point15 = new Point({ type: 'Point', coordinates: [41.3876077,2.1436569] })

        return Promise.all([
            Market.create({ title: 'Mercadona Calabria', address: 'Calle Calabria, 129', location: point1, wines: ['664623a5cd6d9cd0cce38e3c', '664623a5cd6d9cd0cce38e3a', '664623a5cd6d9cd0cce38e3b', '664623a5cd6d9cd0cce38e2b', '664623a5cd6d9cd0cce38e3f', '664623a5cd6d9cd0cce38e43', '664623a5cd6d9cd0cce38e44', '664623a5cd6d9cd0cce38e42', '664623a5cd6d9cd0cce38e41', '664623a5cd6d9cd0cce38e40', '664623a5cd6d9cd0cce38e3e', '664623a5cd6d9cd0cce38e3d'] }),
            Market.create({ title: 'Mercadona Gran Via', address: 'Gran Via de les Corts Catalanes, 373', location: point2, wines: ['664623a5cd6d9cd0cce38e3c', '664623a5cd6d9cd0cce38e3a', '664623a5cd6d9cd0cce38e3b', '664623a5cd6d9cd0cce38e2b', '664623a5cd6d9cd0cce38e3f', '664623a5cd6d9cd0cce38e43', '664623a5cd6d9cd0cce38e44', '664623a5cd6d9cd0cce38e42', '664623a5cd6d9cd0cce38e41', '664623a5cd6d9cd0cce38e40', '664623a5cd6d9cd0cce38e3e', '664623a5cd6d9cd0cce38e3d'] }),
            Market.create({ title: 'Mercadona Provençals', address: 'Calle Provençals, 5', location: point5, wines: ['664623a5cd6d9cd0cce38e3c', '664623a5cd6d9cd0cce38e3a', '664623a5cd6d9cd0cce38e3b', '664623a5cd6d9cd0cce38e2b', '664623a5cd6d9cd0cce38e3f', '664623a5cd6d9cd0cce38e43', '664623a5cd6d9cd0cce38e44', '664623a5cd6d9cd0cce38e42', '664623a5cd6d9cd0cce38e41', '664623a5cd6d9cd0cce38e40', '664623a5cd6d9cd0cce38e3e', '664623a5cd6d9cd0cce38e3d'] }),
            Market.create({ title: 'Mercadona Villadomat', address: 'Calle Viladomat, 279', location: point15, wines: ['664623a5cd6d9cd0cce38e3c', '664623a5cd6d9cd0cce38e3a', '664623a5cd6d9cd0cce38e3b', '664623a5cd6d9cd0cce38e2b', '664623a5cd6d9cd0cce38e3f', '664623a5cd6d9cd0cce38e43', '664623a5cd6d9cd0cce38e44', '664623a5cd6d9cd0cce38e42', '664623a5cd6d9cd0cce38e41', '664623a5cd6d9cd0cce38e40', '664623a5cd6d9cd0cce38e3e', '664623a5cd6d9cd0cce38e3d'] }),
        ]);
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)