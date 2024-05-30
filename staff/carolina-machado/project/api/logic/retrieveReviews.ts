// @ts-nocheck
import { Wine, Review } from '../data/index.ts'
import { validate, errors } from 'com'
const { NotFoundError, SystemError } = errors

function retrieveReviews(wineId: string): Promise<{ _id: string; comment: string; user: { name: string }; date: string }[]> {
    validate.text(wineId, 'wineId', true)

    return Wine.findById(wineId).exec()
        .then(wine => {
            if (!wine) {
                throw new NotFoundError('Wine not found');
            }

            return Promise.all(
                wine.comments.map(commentId =>
                    Review.findById(commentId).populate('user', 'name').exec()
                )
            )
        })
        .then(comments => {
            const filteredComments = comments
                .filter(comment => comment !== null)
                .map(comment => ({
                    _id: comment._id.toString(),
                    comment: comment ? comment.comment : 'No comment available',
                    user: {
                        name: comment.user ? comment.user.name : 'Unknown User'
                    },
                    date: new Date(comment.createdAt).toLocaleDateString()
                }));

            return filteredComments
        })
        .then(filteredComments => {
            // Sanitize the comments by removing any sensitive information
            return filteredComments.map(comment => ({
                _id: comment._id,
                comment: comment.comment,
                user: {
                    name: comment.user.name
                },
                date: comment.date
            }))
        })
        .catch(error => {
            throw new SystemError('Error retrieving review: ' + error.message)
        })
}

export default retrieveReviews