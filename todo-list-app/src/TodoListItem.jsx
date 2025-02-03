import { useDispatch } from "react-redux"
import { markTodoAsCompleted, deletTodo } from "./todosSlice";

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted
        ? <button onClick={() => dispatch(deleteTodo())}>Delete Item</button>
        : <button onClick={() => dispatch(markTodoAsCompleted())}>Mark as Completed</button>}
    </div>
  )
}