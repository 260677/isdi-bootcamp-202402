// @ts-nocheck
import { Review, Wine } from '../data/index.ts'
import { validate, errors } from 'com'

const { SystemError } = errors

function addNewReview(userId, wineId, comment): Promise<any> {
  validate.text(userId, 'userId', true)
  validate.text(wineId, 'wineId', true)
  validate.text(comment, 'comment', true)

  // Decode the comment before saving it to the database
  const decodedComment = decodeURIComponent(comment)

  return (async () => {
    try {
      const newReview = new Review({ user: userId, wine: wineId, comment: decodedComment })
      await newReview.save()

      await Wine.findByIdAndUpdate(wineId, {
        $push: { comments: newReview._id },
      })

      return newReview

    } catch (error) {
      throw new SystemError('Error creating new review: ' + error.message)
    }
  })()

}

export default addNewReview