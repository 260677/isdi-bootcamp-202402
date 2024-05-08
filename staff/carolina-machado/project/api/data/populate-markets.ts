// @ts-nocheck
import mongoose from 'mongoose'

import { User, Wine, Point, Market, Review } from '.'
import { ObjectId } from 'mongodb'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Point.deleteMany())
    .then(() => Market.deleteMany())
    .then(() => {
        const point1 = new Point({ type: 'Point', coordinates: [41.3803416,2.1540512] });
        const point2 = new Point({ type: 'Point', coordinates: [41.3762672,2.1317849] });
        const point3 = new Point({ type: 'Point', coordinates: [41.4020559,2.2080025] });
        const point4 = new Point({ type: 'Point', coordinates: [41.4004016,2.2033415] });
        const point5 = new Point({ type: 'Point', coordinates: [41.4063086,2.2096713] });
        const point6 = new Point({ type: 'Point', coordinates: [41.4029903,2.2035441] });
        const point7 = new Point({ type: 'Point', coordinates: [41.4030778,2.2028185] });
       
        return Promise.all([
            Market.create({ title: 'Mercadona', address: 'Calle Calabria, 129', location: point1, wines: ['663bb7946a81b24281e658e1', '663bb7946a81b24281e658e0', '663bb7946a81b24281e658e7'] }),
            Market.create({ title: 'Mercadona', address: 'Gran Via de les Corts Catalanes, 373', location: point2, wines: ['663bb7946a81b24281e658e1', '663bb7946a81b24281e658e0', '663bb7946a81b24281e658e7'] }),
            Market.create({ title: 'Condis', address: 'Calle Taulat, 185', location: point3, wines: ['663bb7946a81b24281e658e2', '663bb7946a81b24281e658df', '663bb7946a81b24281e658eb'] }),
            Market.create({ title: 'Bonpreu', address: 'Calle Ramon Turró, 2', location: point4, wines: ['663bb7946a81b24281e658e5', '663bb7946a81b24281e658f6', '663bb7946a81b24281e658f7'] }),
            Market.create({ title: 'Mercadona', address: 'Calle Provençals, 5', location: point5, wines: ['663bb7946a81b24281e658e1', '663bb7946a81b24281e658e0', '663bb7946a81b24281e658e7', ] }),
            Market.create({ title: 'Condis', address: 'Calle Bilbao, 53', location: point6, wines: ['663bb7946a81b24281e658e2', '663bb7946a81b24281e658df', '663bb7946a81b24281e658eb'] }),
            Market.create({ title: 'Bon Area', address: 'Calle Bilbao, 67', location: point7, wines: ['663bb7946a81b24281e658ec', '663bb7946a81b24281e658ea', '663bb7946a81b24281e658e6'] }),
            /* Market.create({ title: 'Condis', address: 'Calle Taulat, 185', location: point3, wines: ['662e80da9bd0437d6003be78', '662e80da9bd0437d6003be87', '662bc0b43f7b2f41c2b230ea'] }),
            Market.create({ title: 'Bonpreu', address: 'Calle Ramon Turró, 2', location: point4, wines: ['662e80da9bd0437d6003be78', '662e80da9bd0437d6003be87', '662bc0b43f7b2f41c2b230ea'] }),
            Market.create({ title: 'Mercadona', address: 'Calle Provençals, 5', location: point5, wines: ['662e80da9bd0437d6003be78', '662e80da9bd0437d6003be87', '662bc0b43f7b2f41c2b230ea', ] }), */
        ]);
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error);










    





















//const point1 = new Point({ coordinates: [40, 45] })
//const market1 = new Market({ ..., location: point1 })
//market1.save()
//Market.create({ ..., location: point1 })