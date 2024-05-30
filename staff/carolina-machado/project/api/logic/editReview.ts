// @ts-nocheck
import { Review } from '../data/index.ts'
import { validate, errors } from 'com'

const { SystemError } = errors

function editReview(reviewId: string, userId: string, wineId: string, comment: string): Promise<{ id: string; user: string; wine: string; comment: string; date: Date }> {
    return new Promise<{ id: string; user: string; wine: string; comment: string; date: Date }>((resolve, reject) => {
        Review.findById(reviewId)
            .then(existingReview => {
                if (!existingReview) {
                    throw new Error('Review not found')
                }
                if (existingReview.user.toString() !== userId) {
                    throw new Error('Unauthorized: You are not allowed to edit this review')
                }
                // Update the review with the new comment
                existingReview.comment = comment
                // Save the updated review to the database
                return existingReview.save()
            })
            .then(updatedReview => {
                // Sanitize the response
                const sanitizedReview = {
                    id: updatedReview._id ? updatedReview._id.toString() : 'undefined',
                    user: updatedReview.user ? updatedReview.user.toString() : 'undefined',
                    wine: updatedReview.wine ? updatedReview.wine.toString() : 'undefined',
                    comment: updatedReview.comment,
                    date: updatedReview.createdAt // Assuming `createdAt` is the correct field for the date
                };
                resolve(sanitizedReview);
            })
            .catch(error => {
                reject(new SystemError(`Failed to edit review: ${error.message}`))
            })
    })
}

export default editReview