import axios from 'axios'
import {
  loadingStarted,
  loadingCompleted,
  loadingFailed,
} from './loadingSlice';

export const loadTodos = () => async (dispatch) => {
  dispatch(loadingStarted());
  const response = await axios.get('/api/todos');
  const todos = response.data;
  dispatch(loadingCompleted(todos));
}