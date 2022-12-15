import React from 'react'
import Comment from '../Comment/Comment'

function Comments({comments}) {
  return (
    comments.map(comment => (
        <Comment id={comment.id} username={comment.username} body={comment.body}/>
    ))
  )
}

export default Comments