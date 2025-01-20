import { useState } from 'react'
import './App.css'
import TodoList from './TodoList';


function App() {
  const [completedToDos, setCompletedTodos] = useState([
    { text: 'Take out the garbage', isCompleted: true},
    { text: 'Make dinner', isCompleted: true}
  ]);
  const [incompleteToDos, setIncompleteTodos] = useState([
    { text: 'Paint the house', isCompleted: false },
    { text: 'Practice coding', isCompleted: false }
  ]);

  function markTodoAsComplete(text) {
    setIncompleteTodos(incompleteToDos.filter(t => t.text !== text));
    setCompletedTodos([...completedToDos, { ...incompleteToDos.find(t => t.text === text), isCompleted: true }]);
  }

  function deleteTodo(text) {
    setCompletedTodos(completedToDos.filter(t => t.text !== text));
  }

  function createTodo(text) {
    setIncompleteTodos([...incompleteToDos, { text, isCompleted: false }]);
  }

  return (
    <>
      <TodoList 
        completedTodos={completedToDos} 
        incompleteTodos={incompleteToDos}
        onCompletedClicked={markTodoAsComplete}
        onDeleteClicked={deleteTodo}
        onCreateClicked={createTodo}
      />
    </>
  )
}

export default App
