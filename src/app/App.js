import { useState } from "react";
import { Title, TextBox, TodoList } from './components'
import './App.css';
import localStorageService from "./service/localStorage.service";


function App() {
  const [todos, setTodos] = useState(localStorageService.retrieve('todos') ?? [])

  const createTodo = (text) => {
    setTodos(oldTodos => {
      const highestExistentTodoId = oldTodos.map(el => el.id).sort((a, b) => b - a)[0] ?? 0

      const newTodos = [
        ...oldTodos,
        {
          id: highestExistentTodoId + 1,
          content: text, 
          done: false  
        }
      ]
      
      localStorageService.persist('todos', newTodos)

      return newTodos
    })
  }

  return (
    <div 
      className="App"
      style={{
        textAlign: 'center',
      }}
    >
      <Title />
      <TextBox
        onsubmit={createTodo}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
