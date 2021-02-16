import React from 'react'
import logo from './logo.svg'
import './App.css'
import Input from './components/Input'
import TodoItem from './components/TodoItem'
import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todoSlice'



function App() {
  const TodoList = useSelector(selectTodoList)
  return (
    <div className="App">
      <h1>React Todo Using Redux</h1>
      {
        TodoList.map(item => (
          <TodoItem key={item.id} id={item.id} text={item.text} done={item.done} />
        ))
      }
      <Input />
    </div>
  );
}

export default App;
