import React from 'react'

function WineComment({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index} className='w-full p-2 border border-shadow-fuchsia-700 rounded-lg focus:outline-none focus:ring-2 focus:shadow-fuchsia-700 mb-4'>
          {comment.user && comment.user.name ? (
            <div>
              <p className="text-gray-700">
                <strong>{comment.user.name}:</strong> {comment.comment}
              </p>
              <div>{comment.date}</div>
            </div>
          ) : (
            <p className="text-gray-700">
              <strong>Unknown User:</strong> {comment.comment}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default WineComment