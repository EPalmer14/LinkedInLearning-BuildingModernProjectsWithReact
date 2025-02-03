import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [],
  },
  reducers: {
    createTodo: state => {
      state.value = [...state.value, {
        text: 'New Todo',
        isCompleted: false,
      }];
    },
    markTodoAsCompleted: state => {
      const text = 'New Todo';
      const todo = state.value.find(t => t.text === text);
      todo.isCompleted = true;
    },
    deleteTodo: state => {
      const text = 'New Todo';
      state.value = state.value.filter(t => t.text !== text);
    },
  }
})