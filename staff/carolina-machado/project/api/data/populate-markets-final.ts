import mongoose from 'mongoose'

import { Point, Market } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Point.deleteMany())
    .then(() => Market.deleteMany())
    .then(() => {
        const point11 = new Point({ type: 'Point', coordinates: [41.3794138, 2.1522515] })
        const point12 = new Point({ type: 'Point', coordinates: [41.3838244, 2.1063495] })
        const point4 = new Point({ type: 'Point', coordinates: [41.401232, 2.2000791] })
        const point3 = new Point({ type: 'Point', coordinates: [41.4020559, 2.2060713] })
        const point6 = new Point({ type: 'Point', coordinates: [41.4027215, 2.2009681] })
        const point8 = new Point({ type: 'Point', coordinates: [41.3794426, 2.1322796] })
        const point9 = new Point({ type: 'Point', coordinates: [41.3791358, 2.1595525] })
        const point10 = new Point({ type: 'Point', coordinates: [41.3796277, 2.1438884] })
        const point1 = new Point({ type: 'Point', coordinates: [41.38091, 2.1506411] })
        const point2 = new Point({ type: 'Point', coordinates: [41.376267, 2.1137611] })
        const point5 = new Point({ type: 'Point', coordinates: [41.4058355, 2.2095172] })
        const point15 = new Point({ type: 'Point', coordinates: [41.3876077, 2.1436569] })
        const point17 = new Point({ type: 'Point', coordinates: [41.403099, 2.203008] })
        const point18 = new Point({ type: 'Point', coordinates: [41.4021816, 2.2056232] });


        return Promise.all([
            Market.create({
                title: 'Condis Taulat', address: 'Calle Taulat, 185', location: point3, wines: ['66537c8942940b230f03ca3f', '66537c8942940b230f03ca4f', '66537c8942940b230f03ca3e', '66537c8942940b230f03ca3d', '66537c8942940b230f03ca3c', '66537c8942940b230f03ca3a', '66537c8942940b230f03ca3b', '66537c8942940b230f03ca51', '66537c8942940b230f03ca4e', '66537c8942940b230f03ca4d', '66537c8942940b230f03ca4c', '66537c8942940b230f03ca4b', '66537c8942940b230f03ca49', '66537c8942940b230f03ca48', '66537c8942940b230f03ca46', '66537c8942940b230f03ca45', '66537c8942940b230f03ca44', '66537c8942940b230f03ca43', '66537c8942940b230f03ca42', '66537c8942940b230f03ca41', '66537c8942940b230f03ca35', '66537c8942940b230f03ca34', '66537c8942940b230f03ca33', '66537c8942940b230f03ca32'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },

                ]
            }),
            Market.create({
                title: 'Condis Bilbao', address: 'Calle Bilbao, 53', location: point6, wines: ['66537c8942940b230f03ca3f', '66537c8942940b230f03ca4f', '66537c8942940b230f03ca3e', '66537c8942940b230f03ca3d', '66537c8942940b230f03ca3c', '66537c8942940b230f03ca3a', '66537c8942940b230f03ca3b', '66537c8942940b230f03ca51', '66537c8942940b230f03ca4e', '66537c8942940b230f03ca4d', '66537c8942940b230f03ca4c', '66537c8942940b230f03ca4b', '66537c8942940b230f03ca49', '66537c8942940b230f03ca48', '66537c8942940b230f03ca46', '66537c8942940b230f03ca45', '66537c8942940b230f03ca44', '66537c8942940b230f03ca43', '66537c8942940b230f03ca42', '66537c8942940b230f03ca41', '66537c8942940b230f03ca35', '66537c8942940b230f03ca34', '66537c8942940b230f03ca33', '66537c8942940b230f03ca32'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },

                ]
            }),
            Market.create({
                title: 'Condis Entença', address: 'Calle Entença, 85', location: point8, wines: ['66537c8942940b230f03ca3f', '66537c8942940b230f03ca4f', '66537c8942940b230f03ca3e', '66537c8942940b230f03ca3d', '66537c8942940b230f03ca3c', '66537c8942940b230f03ca3a', '66537c8942940b230f03ca3b', '66537c8942940b230f03ca51', '66537c8942940b230f03ca4e', '66537c8942940b230f03ca4d', '66537c8942940b230f03ca4c', '66537c8942940b230f03ca4b', '66537c8942940b230f03ca49', '66537c8942940b230f03ca48', '66537c8942940b230f03ca46', '66537c8942940b230f03ca45', '66537c8942940b230f03ca44', '66537c8942940b230f03ca43', '66537c8942940b230f03ca42', '66537c8942940b230f03ca41', '66537c8942940b230f03ca35', '66537c8942940b230f03ca34', '66537c8942940b230f03ca33', '66537c8942940b230f03ca32'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },

                ]
            }),
            Market.create({
                title: 'Condis Floridablanca', address: 'Calle Floridablanca, 96', location: point9, wines: ['66537c8942940b230f03ca3f', '66537c8942940b230f03ca4f', '66537c8942940b230f03ca3e', '66537c8942940b230f03ca3d', '66537c8942940b230f03ca3c', '66537c8942940b230f03ca3a', '66537c8942940b230f03ca3b', '66537c8942940b230f03ca51', '66537c8942940b230f03ca4e', '66537c8942940b230f03ca4d', '66537c8942940b230f03ca4c', '66537c8942940b230f03ca4b', '66537c8942940b230f03ca49', '66537c8942940b230f03ca48', '66537c8942940b230f03ca46', '66537c8942940b230f03ca45', '66537c8942940b230f03ca44', '66537c8942940b230f03ca43', '66537c8942940b230f03ca42', '66537c8942940b230f03ca41', '66537c8942940b230f03ca35', '66537c8942940b230f03ca34', '66537c8942940b230f03ca33', '66537c8942940b230f03ca32'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },

                ]
            }),
            Market.create({
                title: 'Condis Llança', address: 'Calle de Llança, 48', location: point10, wines: ['66537c8942940b230f03ca3f', '66537c8942940b230f03ca4f', '66537c8942940b230f03ca3e', '66537c8942940b230f03ca3d', '66537c8942940b230f03ca3c', '66537c8942940b230f03ca3a', '66537c8942940b230f03ca3b', '66537c8942940b230f03ca51', '66537c8942940b230f03ca4e', '66537c8942940b230f03ca4d', '66537c8942940b230f03ca4c', '66537c8942940b230f03ca4b', '66537c8942940b230f03ca49', '66537c8942940b230f03ca48', '66537c8942940b230f03ca46', '66537c8942940b230f03ca45', '66537c8942940b230f03ca44', '66537c8942940b230f03ca43', '66537c8942940b230f03ca42', '66537c8942940b230f03ca41', '66537c8942940b230f03ca35', '66537c8942940b230f03ca34', '66537c8942940b230f03ca33', '66537c8942940b230f03ca32'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },

                ]
            }),
            Market.create({
                title: 'Bonpreu Tamarit', address: 'Calle Tamarit, 130', location: point11, wines: ['66537c8942940b230f03ca40', '66537c8942940b230f03ca4a', '66537c8942940b230f03ca47', '66537c8942940b230f03ca31', '66537c8942940b230f03ca2e', '66537c8942940b230f03ca38', '66537c8942940b230f03ca2d', '66537c8942940b230f03ca2c', '66537c8942940b230f03ca30', '66537c8942940b230f03ca37', '66537c8942940b230f03ca39', '66537c8942940b230f03ca50', '66537c8942940b230f03ca2f'],
                hours: [
                    { day: 'Monday', open: '09:00', close: '18:00' },
                    { day: 'Tuesday', open: '09:00', close: '18:00' },
                    { day: 'Wednesday', open: '09:00', close: '18:00' },
                    { day: 'Thursday', open: '09:00', close: '18:00' },
                    { day: 'Friday', open: '09:00', close: '18:00' },
                    { day: 'Saturday', open: '09:00', close: '18:00' },
                ]
            }),
            Market.create({
                title: 'Bonpreu Josep Tarradellas', address: 'Calle Josep Tarradellas, 45', location: point12, wines: ['66537c8942940b230f03ca40', '66537c8942940b230f03ca4a', '66537c8942940b230f03ca47', '66537c8942940b230f03ca31', '66537c8942940b230f03ca2e', '66537c8942940b230f03ca38', '66537c8942940b230f03ca2d', '66537c8942940b230f03ca2c', '66537c8942940b230f03ca30', '66537c8942940b230f03ca37', '66537c8942940b230f03ca39', '66537c8942940b230f03ca50', '66537c8942940b230f03ca2f'],
                hours: [
                    { day: 'Monday', open: '09:00', close: '18:00' },
                    { day: 'Tuesday', open: '09:00', close: '18:00' },
                    { day: 'Wednesday', open: '09:00', close: '18:00' },
                    { day: 'Thursday', open: '09:00', close: '18:00' },
                    { day: 'Friday', open: '09:00', close: '18:00' },
                    { day: 'Saturday', open: '09:00', close: '18:00' },
                ]
            }),
            Market.create({
                title: 'Bonpreu  Llull', address: 'Calle Lull, 200', location: point4, wines: ['66537c8942940b230f03ca40', '66537c8942940b230f03ca4a', '66537c8942940b230f03ca47', '66537c8942940b230f03ca31', '66537c8942940b230f03ca2e', '66537c8942940b230f03ca38', '66537c8942940b230f03ca2d', '66537c8942940b230f03ca2c', '66537c8942940b230f03ca30', '66537c8942940b230f03ca37', '66537c8942940b230f03ca39', '66537c8942940b230f03ca50', '66537c8942940b230f03ca2f'],
                hours: [
                    { day: 'Monday', open: '09:00', close: '18:00' },
                    { day: 'Tuesday', open: '09:00', close: '18:00' },
                    { day: 'Wednesday', open: '09:00', close: '18:00' },
                    { day: 'Thursday', open: '09:00', close: '18:00' },
                    { day: 'Friday', open: '09:00', close: '18:00' },
                    { day: 'Saturday', open: '09:00', close: '18:00' },
                ]
            }),
            Market.create({
                title: 'Mercadona Calabria', address: 'Calle Calabria, 129', location: point1, wines: ['66537c8942940b230f03ca5a', '66537c8942940b230f03ca5b', '66537c8942940b230f03ca59', '66537c8942940b230f03ca58', '66537c8942940b230f03ca57', '66537c8942940b230f03ca56', '66537c8942940b230f03ca55', '66537c8942940b230f03ca53', '66537c8942940b230f03ca5c', '66537c8942940b230f03ca54', '66537c8942940b230f03ca52'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },
                ]
            }),
            Market.create({
                title: 'Mercadona Gran Via', address: 'Gran Via de les Corts Catalanes, 373', location: point2, wines: ['66537c8942940b230f03ca5a', '66537c8942940b230f03ca5b', '66537c8942940b230f03ca59', '66537c8942940b230f03ca58', '66537c8942940b230f03ca57', '66537c8942940b230f03ca56', '66537c8942940b230f03ca55', '66537c8942940b230f03ca53', '66537c8942940b230f03ca5c', '66537c8942940b230f03ca54', '66537c8942940b230f03ca52'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },
                ]
            }),
            Market.create({
                title: 'Mercadona Provençals', address: 'Calle Provençals, 5', location: point5, wines: ['66537c8942940b230f03ca5a', '66537c8942940b230f03ca5b', '66537c8942940b230f03ca59', '66537c8942940b230f03ca58', '66537c8942940b230f03ca57', '66537c8942940b230f03ca56', '66537c8942940b230f03ca55', '66537c8942940b230f03ca53', '66537c8942940b230f03ca5c', '66537c8942940b230f03ca54', '66537c8942940b230f03ca52'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },
                ]
            }),
            Market.create({
                title: 'Mercadona Villadomat', address: 'Calle Viladomat, 279', location: point15, wines: ['66537c8942940b230f03ca5a', '66537c8942940b230f03ca5b', '66537c8942940b230f03ca59', '66537c8942940b230f03ca58', '66537c8942940b230f03ca57', '66537c8942940b230f03ca56', '66537c8942940b230f03ca55', '66537c8942940b230f03ca53', '66537c8942940b230f03ca5c', '66537c8942940b230f03ca54', '66537c8942940b230f03ca52'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },
                ]
            }),
            Market.create({
                title: 'Alimentació Poblenou',
                address: 'Calle Ramón Turró, 245',
                location: point18,
                wines: [
                    '66537c8942940b230f03ca2b',
                    '66537c8942940b230f03ca29',
                    '66537c8942940b230f03ca2a'
                ],
                hours: [
                    { day: 'Monday', open: '09:00', close: '23:00' },
                    { day: 'Tuesday', open: '09:00', close: '23:00' },
                    { day: 'Wednesday', open: '09:00', close: '23:00' },
                    { day: 'Thursday', open: '09:00', close: '23:00' },
                    { day: 'Friday', open: '09:00', close: '23:00' },
                    { day: 'Saturday', open: '09:00', close: '23:00' },
                    { day: 'Sunday', open: '09:00', close: '22:00' },

                ]
            }),
            Market.create({
                title: 'Bonarea Bilbao',
                address: 'Calle Bilbao, 67',
                location: point17,
                wines: [
                    '66537c8942940b230f03ca2b',
                    '66537c8942940b230f03ca29',
                    '66537c8942940b230f03ca2a'
                ],
                hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },

                ]
            })
        ])
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)