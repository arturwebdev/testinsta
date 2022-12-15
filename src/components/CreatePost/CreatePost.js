import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../images';
import { addPost } from '../../store/slices/posts/postsSlice';
import { createPost, selectUsers } from '../../store/slices/users/usersSlice';
import './CreatePost.css'
const CreatePost = () => {
    const formRef = useRef(null)
    const { currentUser } = useSelector(selectUsers)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        const id = new Date().getTime() + '_' + currentUser.id

        dispatch(createPost({
            id,
            img: formRef.current[0].value,
            desc: formRef.current[1].value,
            userId: currentUser.id,
            username: currentUser.username 
        }))
        dispatch(addPost({
            id,
            img: formRef.current[0].value,
            desc: formRef.current[1].value,
            userId: currentUser.id,
            username: currentUser.username 
        }))

        navigate('/')

        formRef.current.reset()
    }
    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            {/* <form style={{marginTop: '50px'}} method="post" enctype="multipart/form-data">
                <label class="input-file">
                    <input type="file" name="file"/>		
                    <span>Выберите файл</span>
                </label>
            </form> */}
            <form ref={formRef} onSubmit={submitHandler}>
                <input type="text" placeholder='url' />
                <input type="text" placeholder='desc' />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreatePost;
