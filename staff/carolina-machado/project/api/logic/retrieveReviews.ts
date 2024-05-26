// @ts-nocheck
import { Wine, Review } from '../data/index.ts'
import { validate, errors } from 'com'
const { NotFoundError, SystemError } = errors

async function retrieveReviews(wineId: string): Promise<[]> {
  try {
    validate.text(wineId, 'wineId', true)

    const wine = await Wine.findById(wineId).exec()

    if (!wine) {
      throw new NotFoundError('Wine not found')
    }

    console.log('Wine object:', wine)

    const comments = await Promise.all(
      wine.comments.map(async (commentId: string) => {
        console.log('Comment ID:', commentId);
    
        const comment = await Review.findById(commentId).populate('user', 'name').exec()
    
        console.log('Comment object:', comment)
    
        if (!comment) {
          return null; // Skip processing if comment is null
        }
    
        const userName = comment.user ? comment.user.name : 'Unknown User'
    
        const isoDate = new Date(comment.createdAt)
        const formattedDate = `${isoDate.getDate()}/${isoDate.getMonth() + 1}/${isoDate.getFullYear()}`
    
        return {
          _id: commentId,
          comment: comment ? comment.comment : 'No comment available',
          user: {
            name: userName,
          },
          date: formattedDate
        }
      })
    )

    // Filter out null comments
    const filteredComments = comments.filter(comment => comment !== null)
    
    console.log('Filtered Comments array:', filteredComments)
    
    return filteredComments
  } catch (error) {
    console.error('Error fetching comments:', error)
    throw error instanceof NotFoundError ? error : new SystemError('An error occurred while fetching comments')
  }
}
export default retrieveReviews