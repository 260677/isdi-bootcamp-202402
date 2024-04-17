import { validate, errors } from 'com'
import { ObjectId } from 'mongodb'

const { SystemError, NotFoundError } = errors


function removePost(postId, callback) {
    validate.text(postId, 'postId', true)
    validate.callback(callback)

    this.users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            this.posts.find({ postId })
                .then(posts => {

                    posts.forEach(post => {
                        this.users.findOne({ _id: post.author })
                            .then(user => {
                            
                                if (!user) {
                                    callback(new NotFoundError('post owner not found'))

                                    return
                                }

                                post.id = post._id.toString()
                                delete post._id

                              
                                    callback(null, posts.reverse())
                            })
                    })
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}


export default removePost