// @ts-nocheck
import dotenv from 'dotenv'

import mongoose from 'mongoose'
import { User, Wine, WineType } from '../data/index.ts'

import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { Types: { ObjectId } } = mongoose
const { NotFoundError } = errors

const { DuplicityError, CredentialsError } = errors

describe('retrieveWines', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('retrieves all wines for existing user', () => 
        Promise.all([
            User.deleteMany(),
            Wine.deleteMany()
        ])
            .then(() => 
                User.create({ name: 'Carol Machado', email: 'carol@mac.com', password: '123carol123' })
                    .then(user => 
                        Promise.all([
                            Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Albariño Trás Montes', description: 'lemon, peach and jasmine notes', type: 'white', price: 7 }),
                            Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Jasmim Branco', description: 'pure jasmine, 6 months barrica', type: 'white', price: 9 }),
                            Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Chardonnai Tres Joli', description: 'french wine, 2 years roble, woody, dry', type: 'white', price: 12 }),
                        ])
                            .then(([wine1, wine2, wine3]) => 
                                logic.retrieveWines(user.id)
                                    .then(wines => {
                                        expect(wines).to.have.lengthOf(3)

                                        const foundWine1 = wines.find(wine => wine.title === wine1.title)

                                        expect(foundWine1.title).to.equal('Albariño Trás Montes')
                                        expect(foundWine1.description).to.equal('lemon, peach and jasmine notes')

                                        const foundWine2 = wines.find(wine => wine.title === wine2.title)

                                        expect(foundWine2.title).to.equal('Jasmim Branco')
                                        expect(foundWine2.description).to.equal('pure jasmine, 6 months barrica')

                                        const foundWine3 = wines.find(wine => wine.title === wine3.title)

                                        expect(foundWine3.title).to.equal('Chardonnai Tres Joli')
                                        expect(foundWine3.description).to.equal('french wine, 2 years roble, woody, dry')
                                    })
                            )
                    )
            )
    )
                                    
    it('fails on incorrect userId', () => 
        Promise.all([
            User.deleteMany(),
            Wine.deleteMany()
        ])
            .then(() => 
                User.create({ name: 'Carolina Machado', email: 'carol@mac.com', password: '123carol123' })
                    .then(user => 
                        Promise.all([
                            Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Albariño Trás Montes', description: 'lemon, peach and jasmine notes', type: 'white', price: 7 }),
                        ])
                            .then(([wine1]) => {
                                const userId = '26'

                                logic.retrieveWines(userId)
                                    .catch(error => {
                                        expect(error).to.be.instanceOf(NotFoundError)
                                        expect(error.message).to.equal('user not found')
                                    })
                            })
                    )
            )
    )

/*
    it('fails on non-string userId', () => 
        Promise.all([
            User.deleteMany(),
            Wine.deleteMany()
        ])
            .then(() => 
                User.create({ username: 'PereHDZ', email: 'pere@hdz.com', password: 'cuquis1992', avatar: null })
                    .then(user => 
                        Promise.all([
                            Race.create({ name: 'Human', description: 'I am a Human'}),
                            Race.create({ name: 'Elf', description: 'I am an Elf'}),
                            Race.create({ name: 'Dwarf', description: 'I am a Dwarf'}),
                        ])
                            .then(([race1, race2, race3]) => {
                                let errorThrown
                                const userId = 26

                                try {
                                    //@ts-ignore
                                    logic.retrieveRaces(userId)
                                } catch (error) {
                                    errorThrown = error
                                }

                                expect(errorThrown).to.be.instanceOf(TypeError)
                                expect(errorThrown.message).to.equal('userId 26 is not a string')
                            })
                    )
            )
    )
                            */
    after(() => mongoose.disconnect())
})