// @ts-nocheck
import { errors } from 'com'
import { Review } from '../data/index.ts'
const { SystemError } = errors

function editReview(reviewId: string, userId: string, wineId: string, comment: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        try {
            
            Review.findById(reviewId)
                .then(existingReview => {
                    
                    console.log('Existing review:', existingReview)

                    
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
                    resolve(updatedReview)
                })
                .catch(error => {
                    reject(new SystemError(`Failed to edit review: ${error.message}`))
                })
        } catch (error) {
            reject(new SystemError(`Failed to edit review: ${error.message}`))
        }
    })
}

export default editReview;