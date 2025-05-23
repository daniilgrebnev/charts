import {
	type TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from 'react-redux'
import type { AppDispatch, RootState } from './store/store'

// Типизированный useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Типизированный useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
