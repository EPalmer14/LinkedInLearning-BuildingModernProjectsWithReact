import { useSelector } from "react-redux";
import { observer } from 'mobx-react-lite'
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./ToDoListItem";
import { useRecoilState } from "recoil";
import { todos as todosAtom } from './atoms'
import todosStore from "./todos-mobx";
import { getCompletedTodos, getIncompleteTodos, getTodos, getTodosLoading } from './selectors';

export default function TodoList() {
  const todosAreLoading = useSelector(getTodosLoading);
  const completedTodos = useSelector(getCompletedTodos);
  const incompleteTodos = useSelector(getIncompleteTodos);
  //const [todos, setTodos] = useRecoilState(todosAtom);
  
  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm/>
      {todosAreLoading
        ? <p>Loading...</p>
        : (
            <>
            <h3>Completed:</h3>
            {completedTodos.map((todo) => (
              <TodoListItem todo={todo} key={todo.id} />
            ))}
            <h3>Incomplete:</h3>
            {incompleteTodos.map((todo) => (
              <TodoListItem todo={todo} key={todo.id} />
            ))}
            </>
        )}
    </div>
  )
}