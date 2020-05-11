import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const toDoList = ["Learn React", "Climb Mt. Everest", "Run a Marathon", "Feed the Dog"];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Dojo!</h1>
        <h3>Things I Need to Do:</h3>
        <ul>
          {toDoList.map( (toDoItem, index) => <li key={index}>{toDoItem}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
