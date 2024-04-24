// @ts-nocheck
import mongoose from 'mongoose'

import { User, Wine, Market, Experience } from '.'
import { ObjectId } from 'mongodb'



mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Wine.deleteMany())
        .then(() =>
            Promise.all([
            Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'White Garnache', description: 'jasmine, lemon and sweet cotton notes', type: 'white', price: 3 }),
            Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Snow White', description: 'natural wine, drops of cherry and peach', type: 'white', price: 4 }),
            Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Blanco de Nieves', description: '3 months barrica, strong body and dense', type: 'white', price: 5 }),
            Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Albariño Trás Montes', description: 'lemon, peach and jasmine notes', type: 'white', price: 7 }),
            Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Jasmim Branco', description: 'pure jasmine, 6 months barrica', type: 'white', price: 9 }),
            Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Chardonnai Tres Joli', description: 'french wine, 2 years roble, woddy, dry', type: 'white', price: 12 }),
            Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Blanc du Monde', description: 'garnache blanca, 2 years roble, drops of cherry, cotton and lemon', type: 'white', price: 15 }),
            Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Malbec Blanco', description: 'malbec argentino, 2 years french roble, fruity, fresh', type: 'white', price: 18 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Cataluña Red', description: 'ull de llebre grapes, woody and fresh', type: 'red', price: 3.5 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Malbec Rouge', description: 'exported malbec, roble, cherry and blueberry notes', type: 'red', price: 4 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Red Montsant', description: 'jasmine, lemon and sweet cotton notes', type: 'red', price: 4.5 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Onix Priorat', description: 'syrah and garnche, cherry notes', type: 'red', price: 6 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Red Wolf', description: 'roble, dry, woody', type: 'red', price: 8 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Montepulcciano dAbruzo', description: 'san giovese grapes, blueberry and cherry notes', type: 'red', price: 9 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Priorat Camino de las Piedras', description: '2 months in french roble, woody, persistent in the mouth', type: 'red', price: 10 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Montsant de los Sants', description: 'strong body, 2 month barrica, cherry notes', type: 'red', price: 12 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Toro del Rey', description: 'light cherry color, strong blueberry and cotton notes', type: 'red', price: 14 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Rioja Roja', description: 'woody, dry, rioja 6 months roble', type: 'red', price: 15 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Red Butterflies Priorat', description: '', type: 'red', price: 18 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Nero dAvola', description: 'jasmine, lemon and sweet cotton notes', type: 'red', price: 19 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Brunello de Montalcino', description: 'jasmine, lemon and sweet cotton notes', type: 'red', price: 22 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Pink Flamingo', description: 'jasmine, cherry and sweet cotton notes', type: 'pink', price: 3 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Rose Bouquet', description: 'jasmine, lemon and sweet cotton notes', type: 'pink', price: 5 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Cherry Lips', description: 'jasmine, lemon and sweet cotton notes', type: 'pink', price: 7 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Chic Rosé', description: 'jasmine, lemon and sweet cotton notes', type: 'pink', price: 10 }),
            Wine.create({ image: `https://imgbox.com/NSvRLleB`, title: 'Pink Bubbles', description: 'jasmine, lemon and sweet cotton notes', type: 'pink', price: 12 }),
    
            ])

        )

        .then(() => mongoose.disconnect())
        .then(() => console.log('populated'))
        .catch(console.error)
