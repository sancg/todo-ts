// import { useState } from 'react'
import './App.css'
import TodoCounter from './components/TodoCounter'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TodoSearch from './components/TodoSearch'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      {/* {Create the Add ToDo-Button} */}
    </div>
  )
}

export default App
