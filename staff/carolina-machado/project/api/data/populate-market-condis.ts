import mongoose from 'mongoose'

import { Point, Market } from '.'


mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Point.deleteMany())
    .then(() => Market.deleteMany())
    .then(() => {
        
        const point3 = new Point({ type: 'Point', coordinates: [41.4020559,2.2041401] })
        const point6 = new Point({ type: 'Point', coordinates: [41.4027215,2.2009681] })
        const point8 = new Point({ type: 'Point', coordinates: [41.3794426,2.1322796] })
        const point9 = new Point({ type: 'Point', coordinates: [41.3791358,2.1595525] })
        const point10 = new Point({ type: 'Point', coordinates: [41.3796277,2.1438884] })
        
        return Promise.all([
            Market.create({ title: 'Condis Taulat', address: 'Calle Taulat, 185', location: point3, wines: ['664623a5cd6d9cd0cce38e28', '664623a5cd6d9cd0cce38e27', '664623a5cd6d9cd0cce38e26', '664623a5cd6d9cd0cce38e15', '664623a5cd6d9cd0cce38e24', '664623a5cd6d9cd0cce38e23', '664623a5cd6d9cd0cce38e22', '664623a5cd6d9cd0cce38e20', '664623a5cd6d9cd0cce38e1f', '664623a5cd6d9cd0cce38e1e', '664623a5cd6d9cd0cce38e1d', '664623a5cd6d9cd0cce38e1c', '664623a5cd6d9cd0cce38e1b', '664623a5cd6d9cd0cce38e1a', '664623a5cd6d9cd0cce38e19', '664623a5cd6d9cd0cce38e18', '664623a5cd6d9cd0cce38e16', '664623a5cd6d9cd0cce38e14', '664623a5cd6d9cd0cce38e13', '664623a5cd6d9cd0cce38e17', '664623a5cd6d9cd0cce38e2a', '664623a5cd6d9cd0cce38e29', '664623a5cd6d9cd0cce38e2d', '664623a5cd6d9cd0cce38e25'] }),
            Market.create({ title: 'Condis Bilbao', address: 'Calle Bilbao, 53', location: point6, wines: ['664623a5cd6d9cd0cce38e28', '664623a5cd6d9cd0cce38e27', '664623a5cd6d9cd0cce38e26', '664623a5cd6d9cd0cce38e15', '664623a5cd6d9cd0cce38e24', '664623a5cd6d9cd0cce38e23', '664623a5cd6d9cd0cce38e22', '664623a5cd6d9cd0cce38e20', '664623a5cd6d9cd0cce38e1f', '664623a5cd6d9cd0cce38e1e', '664623a5cd6d9cd0cce38e1d', '664623a5cd6d9cd0cce38e1c', '664623a5cd6d9cd0cce38e1b', '664623a5cd6d9cd0cce38e1a', '664623a5cd6d9cd0cce38e19', '664623a5cd6d9cd0cce38e18', '664623a5cd6d9cd0cce38e16', '664623a5cd6d9cd0cce38e14', '664623a5cd6d9cd0cce38e13', '664623a5cd6d9cd0cce38e17', '664623a5cd6d9cd0cce38e2a', '664623a5cd6d9cd0cce38e29', '664623a5cd6d9cd0cce38e2d', '664623a5cd6d9cd0cce38e25']  }),
            Market.create({ title: 'Condis Entença', address: 'Calle Entença, 85', location: point8, wines: ['664623a5cd6d9cd0cce38e28', '664623a5cd6d9cd0cce38e27', '664623a5cd6d9cd0cce38e26', '664623a5cd6d9cd0cce38e15', '664623a5cd6d9cd0cce38e24', '664623a5cd6d9cd0cce38e23', '664623a5cd6d9cd0cce38e22', '664623a5cd6d9cd0cce38e20', '664623a5cd6d9cd0cce38e1f', '664623a5cd6d9cd0cce38e1e', '664623a5cd6d9cd0cce38e1d', '664623a5cd6d9cd0cce38e1c', '664623a5cd6d9cd0cce38e1b', '664623a5cd6d9cd0cce38e1a', '664623a5cd6d9cd0cce38e19', '664623a5cd6d9cd0cce38e18', '664623a5cd6d9cd0cce38e16', '664623a5cd6d9cd0cce38e14', '664623a5cd6d9cd0cce38e13', '664623a5cd6d9cd0cce38e17', '664623a5cd6d9cd0cce38e2a', '664623a5cd6d9cd0cce38e29', '664623a5cd6d9cd0cce38e2d', '664623a5cd6d9cd0cce38e25']  }),
            Market.create({ title: 'Condis Floridablanca', address: 'Calle Floridablanca, 96', location: point9, wines: ['664623a5cd6d9cd0cce38e28', '664623a5cd6d9cd0cce38e27', '664623a5cd6d9cd0cce38e26', '664623a5cd6d9cd0cce38e15', '664623a5cd6d9cd0cce38e24', '664623a5cd6d9cd0cce38e23', '664623a5cd6d9cd0cce38e22', '664623a5cd6d9cd0cce38e20', '664623a5cd6d9cd0cce38e1f', '664623a5cd6d9cd0cce38e1e', '664623a5cd6d9cd0cce38e1d', '664623a5cd6d9cd0cce38e1c', '664623a5cd6d9cd0cce38e1b', '664623a5cd6d9cd0cce38e1a', '664623a5cd6d9cd0cce38e19', '664623a5cd6d9cd0cce38e18', '664623a5cd6d9cd0cce38e16', '664623a5cd6d9cd0cce38e14', '664623a5cd6d9cd0cce38e13', '664623a5cd6d9cd0cce38e17', '664623a5cd6d9cd0cce38e2a', '664623a5cd6d9cd0cce38e29', '664623a5cd6d9cd0cce38e2d', '664623a5cd6d9cd0cce38e25']  }),
            Market.create({ title: 'Condis Llança', address: 'Calle de Llança, 48', location: point10, wines: ['664623a5cd6d9cd0cce38e28', '664623a5cd6d9cd0cce38e27', '664623a5cd6d9cd0cce38e26', '664623a5cd6d9cd0cce38e15', '664623a5cd6d9cd0cce38e24', '664623a5cd6d9cd0cce38e23', '664623a5cd6d9cd0cce38e22', '664623a5cd6d9cd0cce38e20', '664623a5cd6d9cd0cce38e1f', '664623a5cd6d9cd0cce38e1e', '664623a5cd6d9cd0cce38e1d', '664623a5cd6d9cd0cce38e1c', '664623a5cd6d9cd0cce38e1b', '664623a5cd6d9cd0cce38e1a', '664623a5cd6d9cd0cce38e19', '664623a5cd6d9cd0cce38e18', '664623a5cd6d9cd0cce38e16', '664623a5cd6d9cd0cce38e14', '664623a5cd6d9cd0cce38e13', '664623a5cd6d9cd0cce38e17', '664623a5cd6d9cd0cce38e2a', '664623a5cd6d9cd0cce38e29', '664623a5cd6d9cd0cce38e2d', '664623a5cd6d9cd0cce38e25']  }),
            
        ])
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)