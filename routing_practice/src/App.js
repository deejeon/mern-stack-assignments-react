import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Router } from '@reach/router';

import Home from './views/Home';
import Output from './views/Output';
import ColorWord from './views/ColorWord';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Routing Practice</h1>
      </header>
      <Router>
        <Home path="home" />
        <Output path=":input" />
        <ColorWord path=":word/:color/:bg" />
      </Router>
    </div>
  );
}

export default App;
