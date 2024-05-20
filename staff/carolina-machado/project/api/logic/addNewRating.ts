// @ts-nocheck
import { Schema, ObjectId } from 'mongoose';
import { User, Wine, Market } from '../data/index.ts';
import { validate, errors } from 'com';

const { SystemError } = errors;

function calculateAverageRating(ratings) {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((total, rating) => total + rating, 0);
    const average = sum / ratings.length;
    return Math.round(average * 10) / 10; // Round to one decimal place
}

function addNewRating(wineId: string, rating: number): Promise<number> {
    validate.text(wineId, 'wineId', true);
    
    return (async () => {
        try {
            const wine = await Wine.findById(wineId);
            if (!wine) {
                throw new Error('Wine not found');
            }

            wine.rates.push(rating);
            wine.averageRating = calculateAverageRating(wine.rates);

            await wine.save();

            

            return wine.averageRating;
        } catch (error) {
            throw new SystemError('Error updating rating: ' + error.message);
        }
    })();
}

export default addNewRating;