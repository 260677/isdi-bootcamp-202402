import { validate, errors } from 'com'

function removePost(posts, postId, callback) {
    validate.text(postId, 'postId', true)
    validate.callback(callback)

    var xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText: json } = xhr

        if (status == 201) {
            callback(null)

            return
        }

        const { error, message } = JSON.parse(json)

        const constructor = errors[error]

        callback(new constructor(message))
    }

    xhr.open('DELETE', 'http://localhost:8080/posts')

    xhr.setRequestHeader('Authorization', sessionStorage.userId)
    xhr.setRequestHeader('Content-type', 'application/json');

  


    const post = posts.findOne({ postId })

    if (!post) throw new Error('post not found')

    if (post.author !== sessionStorage.userId) throw new Error('post does not belong to user')

    posts.deleteOne({ postId })
}

export default removePost