import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import AddTodo from './components/AddTodo';
import TodoListDisplay from './components/TodoListDisplay';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addNewItem = ( newItem ) => {
    const newList = [newItem, ...todoList];
    setTodoList(newList);
  }

  const deleteItem = (idx) => {
    const newList = todoList.filter( (item, i) => i!=idx );
    setTodoList(newList);
  }

  const checkOrUncheck = ( idx ) => {
    let newCheckState = !todoList[idx].checked;
    let newList = [...todoList];
    newList[idx].checked = newCheckState;
    setTodoList(newList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <AddTodo onNewItem={ addNewItem }></AddTodo>
      <TodoListDisplay todoList={ todoList } onDelete={ deleteItem } onCheck={ checkOrUncheck }></TodoListDisplay>
    </div>
  );
}

export default App;
