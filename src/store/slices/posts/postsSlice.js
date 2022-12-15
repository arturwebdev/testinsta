import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";

const postsSlice  = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addNewComment(state, {payload}){
            const postIdx = state.findIndex(post=> post.id === payload.postId)
            state[postIdx].comments.push({
                id: new Date().getTime(),
                username: payload.username,
                body: payload.body 
            })
        },
        addPost(state, {payload}){
            const { id, username, desc, img } = payload
            const currentPost = {
                id, username, desc, img,
                likesCount: Math.round(Math.random() * 1000),
                timeAgo: Math.round(Math.random() * 10) + ' Minutes Ago',
                comments: [],
            }
            state.unshift(currentPost)
        }
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, {payload}) => {
            return [...payload]
        }
    }
})

export const selectPosts = state => state.posts

export const {addNewComment, addPost} = postsSlice.actions

export const postsReducer = postsSlice.reducer

