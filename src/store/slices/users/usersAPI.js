import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function() {
        const responseUsers = await axios.get('https://jsonplaceholder.typicode.com/users')
        const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500')

        const dataUsers = responseUsers.data
        const dataPosts = responsePosts.data

        const data = dataUsers.map(user => ({
            id: user.id,
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            name: user.name,
            password: user.address.city.toLowerCase(),
            desc: user.company.catchPhrase,
            messages: [],
            posts: dataPosts.filter(post => post.albumId === user.id)
                            .map(post => ({
                                id: post.id + '_' + user.id,
                                username: user.username,
                                desc: post.title.slice(post.title.indexOf(' ') + 1),
                                img: post.url,
                                likesCount: Math.round(Math.random() * 1000),
                                timeAgo: Math.round(Math.random() * 10) + ' Minutes Ago',
                                comments: []
                            }))
        }))

        return data
    }
)