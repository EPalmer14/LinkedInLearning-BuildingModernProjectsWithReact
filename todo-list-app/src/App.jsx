import './App.css'
import TodoList from './TodoList';


function App() {

  function createTodo(text) {
    setIncompleteTodos([...incompleteToDos, { text, isCompleted: false }]);
  }

  return (
    <>
      <TodoList
        onCreateClicked={createTodo}
      />
    </>
  )
}

export default App
