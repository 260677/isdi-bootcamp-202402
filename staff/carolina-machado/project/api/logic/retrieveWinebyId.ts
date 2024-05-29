import { Wine } from '../data/index.ts'
import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors

function retrieveWineById(wineId: string): Promise<{ image: string, title: string, description: string, type: string, price: number, rates: number[], averageRating: number }> {
    validate.text(wineId, 'wineId', true)

    return (async () => {
        try {
            const wine = await Wine.findById(wineId).lean().exec()
            if (!wine) {
                throw new NotFoundError('Wine not found')
            }
            return {
                image: wine.image,
                title: wine.title,
                description: wine.description,
                type: wine.type,
                price: wine.price,
                rates: wine.rates,
                averageRating: wine.averageRating
            };
        } catch (error) {
            if (error instanceof NotFoundError) {
                throw error
            }
            throw new SystemError(error.message)
        }
    })()
}

export default retrieveWineById