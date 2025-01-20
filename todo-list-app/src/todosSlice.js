import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [],
  },
  reducers: {
    createTodo: state => state,
    markTodoAsCompleted: state => state,
    deleteTodo: state => state,
  }
})