import mongoose from 'mongoose'

import { Point, Market } from '.'


mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Point.deleteMany())
    .then(() => Market.deleteMany())
    .then(() => {
        
        const point11 = new Point({ type: 'Point', coordinates: [41.3794138,2.1522515] })
        const point12 = new Point({ type: 'Point', coordinates: [41.3838244,2.1063495] })
        const point4 = new Point({ type: 'Point', coordinates: [41.4032558,2.2054205] })
       

        return Promise.all([
            
            Market.create({ title: 'Bonpreu Tamarit', address: 'Calle Tamarit, 130', location: point11, wines: ['664623a5cd6d9cd0cce38e21', '664623a5cd6d9cd0cce38e39', '664623a5cd6d9cd0cce38e38', '664623a5cd6d9cd0cce38e37', '664623a5cd6d9cd0cce38e36', '664623a5cd6d9cd0cce38e35', '664623a5cd6d9cd0cce38e34', '664623a5cd6d9cd0cce38e33', '664623a5cd6d9cd0cce38e32', '664623a5cd6d9cd0cce38e31', '664623a5cd6d9cd0cce38e30', '664623a5cd6d9cd0cce38e2f', '664623a5cd6d9cd0cce38e2e', '664623a5cd6d9cd0cce38e2c'] }),
            Market.create({ title: 'Bonpreu Josep Tarradellas', address: 'Calle Josep Tarradellas, 45', location: point12, wines: ['664623a5cd6d9cd0cce38e21', '664623a5cd6d9cd0cce38e39', '664623a5cd6d9cd0cce38e38', '664623a5cd6d9cd0cce38e37', '664623a5cd6d9cd0cce38e36', '664623a5cd6d9cd0cce38e35', '664623a5cd6d9cd0cce38e34', '664623a5cd6d9cd0cce38e33', '664623a5cd6d9cd0cce38e32', '664623a5cd6d9cd0cce38e31', '664623a5cd6d9cd0cce38e30', '664623a5cd6d9cd0cce38e2f', '664623a5cd6d9cd0cce38e2e', '664623a5cd6d9cd0cce38e2c']}),
            Market.create({ title: 'Bonpreu  Llull', address: 'Calle Lull, 200', location: point4, wines: ['664623a5cd6d9cd0cce38e21', '664623a5cd6d9cd0cce38e39', '664623a5cd6d9cd0cce38e38', '664623a5cd6d9cd0cce38e37', '664623a5cd6d9cd0cce38e36', '664623a5cd6d9cd0cce38e35', '664623a5cd6d9cd0cce38e34', '664623a5cd6d9cd0cce38e33', '664623a5cd6d9cd0cce38e32', '664623a5cd6d9cd0cce38e31', '664623a5cd6d9cd0cce38e30', '664623a5cd6d9cd0cce38e2f', '664623a5cd6d9cd0cce38e2e', '664623a5cd6d9cd0cce38e2c'] }),
           
        ]);
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)