import { todoType } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: todoType[] = []

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<todoType>) => {
			state.push(action.payload)
			return
		},
		removeTodo: (state, action: PayloadAction<number>) => {
			return state.filter(todo => todo.id !== action.payload)
		},
	},
})

export const { addTodo, removeTodo } = todoSlice.actions

export const selectTodo = (state: { todo: todoType[] }) => state.todo

export default todoSlice.reducer
