import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        dataUsers: [],
        currentUser: null
    },
    reducers: {
        toggleCurrentUser(state, {payload}){
            let userIdx = state.dataUsers.findIndex(user => (user.email === payload.login || user.username === payload.login) && user.password === payload.password)
            console.log(userIdx);
            if (userIdx !== -1) {
                state.currentUser = state.dataUsers[userIdx]
            }
        },
        logOut(state) {
            state.currentUser = null
        },
        newMess(state, {payload}){
            const {userId, mess} = payload
            let userIdx = state.dataUsers.findIndex(user => user.id === userId)
            let answ

            switch (mess.toLowerCase()) {
                case 'barev':
                    answ = 'Barev dzez'
                    break;
                default:
                    answ = 'Es dzez chem haskanum'
                    break;
            }

            const currentMessages = [
                {
                    id: new Date().getTime() + 'me',
                    user: 'me',
                    text: mess
                },
                {
                    id: new Date().getTime() + 'bot',
                    user: 'bot',
                    text: answ
                }
            ]

            state.currentUser.messages.push(...currentMessages)
            state.dataUsers[userIdx].messages.push(...currentMessages)

        },
        createPost(state, {payload}){
            const { id, username, desc, img, userId } = payload
            let userIdx = state.dataUsers.findIndex(user => user.id === userId)
            const currentPost = {
                id, username, desc, img,
                likesCount: Math.round(Math.random() * 1000),
                timeAgo: Math.round(Math.random() * 10) + ' Minutes Ago',
                comments: []
            }
            state.currentUser.posts.unshift(currentPost)
            state.dataUsers[userIdx].posts.unshift(currentPost)
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                dataUsers: [...payload]
            }
        }
    }
})

export const selectUsers = state => state.users

export const {toggleCurrentUser, logOut, newMess, createPost} = usersSlice.actions

export const usersReducer = usersSlice.reducer