import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'
import { addNewComment } from '../../store/slices/posts/postsSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import Comments from '../Comments/Comments'

function Post({id, img, username, likesCount, postText, timeAgo, comments}) {
    const [show, setShow] = useState(false)
    const formRef = useRef(null)
    
    const {currentUser} = useSelector(selectUsers)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewComment({
            postId: id,
            username: currentUser.username,
            body: formRef.current[0].value
        }))
        formRef.current.reset()
    }
  return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                <div className="profile-pic"><img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOTbdk2w5cbg1UraMwCWc6DWZi2iesdYNvJEjaMY&s`} alt="" /></div>
                <p className="username">{username}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
                <img src={IMAGES.save} className="save icon" alt=""/>
            </div>
            <p className="likes">{likesCount}</p>
            {postText && <p className="description"><span>{username} </span> {postText}</p>}
            <p className="post-time">{timeAgo}</p>
            <div className='comments'>
                {
                    show ? <><Comments comments = {comments}/>
                    <h2 style={{cursor: 'pointer'}} onClick={()=> setShow(false)}>Show less </h2> </> 
                    : <h2 style={{cursor: 'pointer'}} onClick={()=> setShow(true)}>Show more </h2>
                }
            </div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="comment-wrapper">
                <img src={IMAGES.smile} className="icon" alt=""/>
                <input onFocus={() => setShow(true)} type="text" className="comment-box" placeholder="Add a comment"/>
                <button className="comment-btn">post</button>
            </div>
        </form>
    </div>
  )
}

export default Post