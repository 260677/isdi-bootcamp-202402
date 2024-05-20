//@ts-nocheck
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import logic from './logic'
import { errors } from 'com'
import tracer from 'tracer'
import colors from 'colors'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import findWinesAndMarkets from './logic/findWinesAndMarkets.ts'
import retrieveWineById from './logic/retrieveWinebyId.ts'
import addNewRating from './logic/addNewRating.ts'



dotenv.config()

const { TokenExpiredError } = jwt

const { MONGODB_URL, PORT, JWT_SECRET, JWT_EXP } = process.env

const logger = tracer.colorConsole({
    filters: {
        debug: colors.green,
        info: colors.blue,
        warn: colors.yellow,
        error: colors.red
    }
})

const {
    ContentError,
    SystemError,
    DuplicityError,
    NotFoundError,
    CredentialsError,
    UnauthorizedError
} = errors


mongoose.connect(MONGODB_URL)
    .then(() => {
        const api = express()

        const jsonBodyParser = express.json()

        api.use(cors())
        api.use(express.json())

        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { name, email, password } = req.body

                logic.registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof SystemError) {
                            logger.error(error.message)

                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        } else if (error instanceof DuplicityError) {
                            logger.warn(error.message)

                            res.status(409).json({ error: error.constructor.name, message: error.message })
                        }
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)

                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else {
                    logger.warn(error.message)

                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

                logic.authenticateUser(email, password)
                    .then(userId => {
                        const token = jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: JWT_EXP })

                        res.json(token)
                    })
                    .catch(error => {
                        if (error instanceof SystemError) {
                            logger.error(error.message)

                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        } else if (error instanceof CredentialsError) {
                            logger.warn(error.message)

                            res.status(401).json({ error: error.constructor.name, message: error.message })
                        } else if (error instanceof NotFoundError) {
                            logger.warn(error.message)

                            res.status(404).json({ error: error.constructor.name, message: error.message })
                        }
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)

                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else {
                    logger.warn(error.message)

                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })

        api.get('/users/:targetUserId', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { targetUserId } = req.params

                logic.retrieveUser(userId as string, targetUserId)
                    .then(user => res.json(user))
                    .catch(error => {
                        if (error instanceof SystemError) {
                            logger.error(error.message)

                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        } else if (error instanceof NotFoundError) {
                            logger.warn(error.message)

                            res.status(404).json({ error: error.constructor.name, message: error.message })
                        }
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)

                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else if (error instanceof TokenExpiredError) {
                    logger.warn(error.message)

                    res.status(498).json({ error: UnauthorizedError.name, message: 'session expired' })
                } else {
                    logger.warn(error.message)

                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })

        api.get('/wines', async (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const location = [parseFloat(req.query.latitude), parseFloat(req.query.longitude)]
                const proximity = parseFloat(req.query.proximity)
                const minPrice = parseFloat(req.query.minPrice)
                const maxPrice = parseFloat(req.query.maxPrice)
                const type = req.query.type


                const result = await findWinesAndMarkets(userId, location, proximity, minPrice, maxPrice, type)


                console.log('Result API:', result)

                res.json(result)

            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)

                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else if (error instanceof TokenExpiredError) {
                    logger.warn(error.message)

                    res.status(498).json({ error: UnauthorizedError.name, message: 'session expired' })
                } else {
                    logger.warn(error.message)

                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })

       

        // Endpoint to rate a wine
        api.post('/wines/:wineId/rate', jsonBodyParser, async (req, res) => {
            try {
                const { wineId } = req.params
                const { rating } = req.body

                console.log('Received Rating:', rating)

                const newAverageRating = await addNewRating(wineId, rating)

                res.json({ message: 'Rating updated successfully', newAverageRating })
            } catch (error) {
                console.error('Error updating rating:', error)
                if (error instanceof NotFoundError) {
                    res.status(404).json({ error: error.message })
                } else {
                    res.status(500).json({ error: 'Internal server error' })
                }
            }
        })

        // Endpoint to fetch wine data by ID
        api.get('/wines/:wineId', async (req, res) => {
            try {
                const { wineId } = req.params

                const wine = await retrieveWineById(wineId)
                res.json(wine);
            } catch (error) {
                console.error('Error fetching wine data:', error)
                if (error instanceof NotFoundError) {
                    res.status(404).json({ error: error.message })
                } else {
                    res.status(500).json({ error: 'Internal server error' })
                }
            }
        })

        

        api.listen(PORT, () => logger.info(`API listening on port ${PORT}`))
    })
    .catch(error => logger.error(error))