import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [currentBoxes, setCurrentBoxes] = useState([]);

  const newBox = (box) => {
    setCurrentBoxes([...currentBoxes,box]);
  };

  const handleReset = () => {
    setCurrentBoxes([]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Box Generator</h1>
      </header>
      <div className="App-body">
        <BoxForm onNewBox={newBox}></BoxForm>
        <BoxDisplay boxes={currentBoxes}></BoxDisplay>
        <button onClick={handleReset}>Clear all boxes</button>
      </div>
    </div>
  );
}

export default App;
