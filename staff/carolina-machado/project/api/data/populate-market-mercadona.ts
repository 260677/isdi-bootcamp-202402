import mongoose from 'mongoose'

import { User, Wine, Point, Market, Review } from '.'
import { ObjectId } from 'mongodb'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Point.deleteMany())
    .then(() => Market.deleteMany())
    .then(() => {
        const point1 = new Point({ type: 'Point', coordinates: [41.3803416,2.1540512] })
        const point2 = new Point({ type: 'Point', coordinates: [41.3762672,2.1317849] })
        const point5 = new Point({ type: 'Point', coordinates: [41.4063086,2.2096713] })
        const point15 = new Point({ type: 'Point', coordinates: [41.3876036,2.1313865] })

        return Promise.all([
            Market.create({ title: 'Mercadona Calabria', address: 'Calle Calabria, 129', location: point1, wines: ['663e2c987f01d90047c87e0c', '663e2c987f01d90047c87e0d', '663e2c987f01d90047c87e0e', '663e2c987f01d90047c87e0f', '663e2c987f01d90047c87e10', '663e2c987f01d90047c87e06', '663e2c987f01d90047c87e09', '663e2c987f01d90047c87e07', '663e2c987f01d90047c87e08', '663e2c987f01d90047c87e0a', '663e2c987f01d90047c87e0b'] }),
            Market.create({ title: 'Mercadona Gran Via', address: 'Gran Via de les Corts Catalanes, 373', location: point2, wines: ['663e2c987f01d90047c87e0c', '663e2c987f01d90047c87e0d', '663e2c987f01d90047c87e0e', '663e2c987f01d90047c87e0f', '663e2c987f01d90047c87e10', '663e2c987f01d90047c87e06', '663e2c987f01d90047c87e09', '663e2c987f01d90047c87e07', '663e2c987f01d90047c87e08', '663e2c987f01d90047c87e0a', '663e2c987f01d90047c87e0b'] }),
            
            Market.create({ title: 'Mercadona Provençals', address: 'Calle Provençals, 5', location: point5, wines: ['663e2c987f01d90047c87e0c', '663e2c987f01d90047c87e0d', '663e2c987f01d90047c87e0e', '663e2c987f01d90047c87e0f', '663e2c987f01d90047c87e10', '663e2c987f01d90047c87e06', '663e2c987f01d90047c87e09', '663e2c987f01d90047c87e07', '663e2c987f01d90047c87e08', '663e2c987f01d90047c87e0a', '663e2c987f01d90047c87e0b'] }),
            
            Market.create({ title: 'Mercadona Villadomat', address: 'Calle Viladomat, 279', location: point15, wines: ['663e2c987f01d90047c87e0c', '663e2c987f01d90047c87e0d', '663e2c987f01d90047c87e0e', '663e2c987f01d90047c87e0f', '663e2c987f01d90047c87e10', '663e2c987f01d90047c87e06', '663e2c987f01d90047c87e09', '663e2c987f01d90047c87e07', '663e2c987f01d90047c87e08', '663e2c987f01d90047c87e0a', '663e2c987f01d90047c87e0b'] }),
        ]);
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)