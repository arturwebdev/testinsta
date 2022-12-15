import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IMAGES from '../../images'
import { fetchPosts } from '../../store/slices/posts/postsAPI'
import { selectPosts } from '../../store/slices/posts/postsSlice'
import { selectSearch } from '../../store/slices/search/searchSlice'
import Post from '../Post/Post'

function Posts() {
    // // const posts = [
    //     {
    //         id: '1',
    //         img: IMAGES.cover1,
    //         name: 'user1',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'

    //     },
    //     {
    //         id: '2',
    //         img: IMAGES.cover2,
    //         name: 'user2',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'
    //     },
    //     {
    //         id: '3',
    //         img: IMAGES.cover3,
    //         name: 'user3',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'
    //     },
    //     {
    //         id: '4',
    //         img: IMAGES.cover4,
    //         name: 'user4',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'
    //     }
    // // ]
    const posts = useSelector(selectPosts)
    const searchWord = useSelector(selectSearch)
    const dispatch = useDispatch()

    useEffect(()=> {
        if (!posts.length) {
            dispatch(fetchPosts())
        }
    },[])
  return (
    <>
        {
            posts.filter(el => el.username.includes(searchWord.toLowerCase())).map(el => <Post key={el.id} id={el.id} img={el.img} username={el.username} likesCount={el.likesCount} postText={el.desc} timeAgo={el.timeAgo} comments={el.comments} />)
        }
    </>
  )
}

export default Posts