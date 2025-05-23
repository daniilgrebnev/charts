import { combineReducers, configureStore } from '@reduxjs/toolkit'
import data from './chartsStore'

const combine = combineReducers({ data })

export const store = configureStore({
	reducer: combine,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
