import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./ToDoListItem";

export default function TodoList({ onCompletedClicked, onDeleteClicked, onCreateClicked }) {
  const todos = useSelector(state => state.todos.value);
  
  
  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm onCreateClicked={onCreateClicked}/>
      <p>New Todo form here:</p>
      <h3>Completed:</h3>
      {completedTodos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} onDeleteClicked={onDeleteClicked}/>
      ))}
      <h3>Incomplete:</h3>
      {incompleteTodos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} onCompletedClicked={onCompletedClicked}/>
      ))}
    </div>
  )
}