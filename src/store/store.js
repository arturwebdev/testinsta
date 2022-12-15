import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import { postsReducer } from "./slices/posts/postsSlice";
import { searchReducer } from "./slices/search/searchSlice";
import { usersReducer } from "./slices/users/usersSlice";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");



const persistConfig = {
    key: 'custominsta',
    storage,
}

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    search: searchReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

export default store