import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon List</h1>
      </header>
      <PokemonList></PokemonList>
    </div>
  );
}

export default App;
