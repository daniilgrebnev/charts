import {
	createAsyncThunk,
	createSlice,
	type PayloadAction,
} from '@reduxjs/toolkit'
import { getData } from '../api/api'
import type { IDataItem, IDataPair, TDataCollection } from '../types/data'

interface DataState {
	items: TDataCollection
	loading: boolean
	error: string | null
	activeId: number | string | null
}

const initialState: DataState = {
	items: [],
	loading: false,
	error: null,
	activeId: null,
}

export const fetchData = createAsyncThunk(
	'data/fetchData',
	async (_, { rejectWithValue }) => {
		try {
			const data = await getData()
			if (!data) {
				throw new Error('Received undefined data')
			}
			return data
		} catch (error) {
			return rejectWithValue('Failed')
		}
	}
)

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		addDataItem: (state, action: PayloadAction<IDataItem>) => {
			state.items.push(action.payload)
		},
		setData: (state, action: PayloadAction<TDataCollection>) => {
			state.items = action.payload
			state.activeId = action.payload[0].id
		},
		updateDataItem: (
			state,
			action: PayloadAction<{ id: number; data: IDataPair }>
		) => {
			const index = state.items.findIndex(item => item.id === action.payload.id)
			if (index !== -1) {
				state.items[index].data = action.payload.data
			}
		},
		resetData: () => initialState,
		setActiveId: (state, action: PayloadAction<number | string>) => {
			state.activeId = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchData.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(
				fetchData.fulfilled,
				(state, action: PayloadAction<TDataCollection>) => {
					state.loading = false
					state.items = action.payload
					state.activeId = action.payload[0].id
				}
			)
			.addCase(fetchData.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})
	},
})

export const { addDataItem, setData, updateDataItem, resetData, setActiveId } =
	dataSlice.actions
export default dataSlice.reducer
