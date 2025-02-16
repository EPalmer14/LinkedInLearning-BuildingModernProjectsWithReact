export const getTodos = state => state.todos.value;
export const getTodosLoading = state => !state.loading.value.completed;

export const getCompletedTodos = state => {
  const todos = getTodos(state);
  return todos.filter(t => t.isCompleted);
}

export const getIncompleteTodos = state => {
  const todos = getTodos(state);
  return todos.filter(t => !t.isCompleted);
}