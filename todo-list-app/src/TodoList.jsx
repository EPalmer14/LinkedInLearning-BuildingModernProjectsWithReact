import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./ToDoListItem";
import { useRecoilState } from "recoil";
import { todos as todosAtom } from './atoms'

export default function TodoList() {
  // const todos = useSelector(state => state.todos.value);
  const [todos, setTodos] = useRecoilState(todosAtom);

  
  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm/>
      <p>New Todo form here:</p>
      <h3>Completed:</h3>
      {todos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
      <h3>Incomplete:</h3>
      {todos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
    </div>
  )
}