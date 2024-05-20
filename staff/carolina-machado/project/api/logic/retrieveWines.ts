/* import { Schema } from 'mongoose'

const { Types: { ObjectId } } = Schema

import { User, Wine } from '../data/index.ts'

import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors


function retrieveWines(userId: string): Promise<[{ image: String, title: String, description: String, type: String, price: number }] | { image: String, title: String, description: String, type: String, price: Number } []> {

    validate.text(userId, 'userId', true)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Wine.find().lean().exec()
                .catch(error => { throw new SystemError(error.message)})
        })
}

export default retrieveWines
 */




