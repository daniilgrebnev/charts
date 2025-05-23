import { combineReducers, configureStore } from '@reduxjs/toolkit'
import data from './chartsStore'

const combine = combineReducers({ data })

export const store = configureStore({
	reducer: combine,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
