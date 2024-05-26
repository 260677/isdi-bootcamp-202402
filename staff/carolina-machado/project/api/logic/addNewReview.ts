// @ts-nocheck
import { Review, Wine } from '../data/index.ts'
import { validate, errors } from 'com'

const { SystemError, TypeError, ContentError, TokenExpiredError, UnauthorizedError } = errors

async function addNewReview(userId, wineId, comment) {
  validate.text(userId, 'userId', true)
  validate.text(wineId, 'wineId', true)
  validate.text(comment, 'comment', true)

  // Decode the comment before saving it to the database
  const decodedComment = decodeURIComponent(comment)

  try {
    const newReview = new Review({ user: userId, wine: wineId, comment: decodedComment })
    await newReview.save()

    await Wine.findByIdAndUpdate(wineId, {
      $push: { comments: newReview._id },
    })

    return newReview
  } catch (error) {
    if (error instanceof TypeError || error instanceof ContentError) {
      throw new error.constructor(error.message)
    } else if (error instanceof TokenExpiredError) {
      throw new UnauthorizedError('session expired')
    } else {
      throw new SystemError('Error adding review: ' + error.message)
    }
  }
}

export default addNewReview