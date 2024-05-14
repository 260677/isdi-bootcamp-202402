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
        const point3 = new Point({ type: 'Point', coordinates: [41.4020559,2.2080025] })
        const point6 = new Point({ type: 'Point', coordinates: [41.4029903,2.2035441] })
        const point8 = new Point({ type: 'Point', coordinates: [41.3794451,2.1327317] })
        const point9 = new Point({ type: 'Point', coordinates: [41.3790909,2.1473229] })
        const point10 = new Point({ type: 'Point', coordinates: [41.3796237,2.128687] })

        return Promise.all([
            Market.create({ title: 'Mercadona Calabria', address: 'Calle Calabria, 129', location: point1, wines: ['663e2c987f01d90047c87e0c', '663e2c987f01d90047c87e0d', '663e2c987f01d90047c87e0e', '663e2c987f01d90047c87e0f', '663e2c987f01d90047c87e10', '663e2c987f01d90047c87e06', '663e2c987f01d90047c87e09', '663e2c987f01d90047c87e07', '663e2c987f01d90047c87e08', '663e2c987f01d90047c87e0a', '663e2c987f01d90047c87e0b'] }),
            Market.create({ title: 'Mercadona Gran Via', address: 'Gran Via de les Corts Catalanes, 373', location: point2, wines: ['663e2c987f01d90047c87e0c', '663e2c987f01d90047c87e0d', '663e2c987f01d90047c87e0e', '663e2c987f01d90047c87e0f', '663e2c987f01d90047c87e10', '663e2c987f01d90047c87e06', '663e2c987f01d90047c87e09', '663e2c987f01d90047c87e07', '663e2c987f01d90047c87e08', '663e2c987f01d90047c87e0a', '663e2c987f01d90047c87e0b'] }),
            Market.create({ title: 'Mercadona Provençals', address: 'Calle Provençals, 5', location: point5, wines: ['663e2c987f01d90047c87e0c', '663e2c987f01d90047c87e0d', '663e2c987f01d90047c87e0e', '663e2c987f01d90047c87e0f', '663e2c987f01d90047c87e10', '663e2c987f01d90047c87e06', '663e2c987f01d90047c87e09', '663e2c987f01d90047c87e07', '663e2c987f01d90047c87e08', '663e2c987f01d90047c87e0a', '663e2c987f01d90047c87e0b'] }),
            Market.create({ title: 'Mercadona Villadomat', address: 'Calle Viladomat, 279', location: point15, wines: ['663e2c987f01d90047c87e0c', '663e2c987f01d90047c87e0d', '663e2c987f01d90047c87e0e', '663e2c987f01d90047c87e0f', '663e2c987f01d90047c87e10', '663e2c987f01d90047c87e06', '663e2c987f01d90047c87e09', '663e2c987f01d90047c87e07', '663e2c987f01d90047c87e08', '663e2c987f01d90047c87e0a', '663e2c987f01d90047c87e0b'] }),
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