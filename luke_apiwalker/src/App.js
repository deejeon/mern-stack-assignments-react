import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Router, navigate } from '@reach/router';

import SearchBar from './components/SearchBar';
import PersonPage from './views/PersonPage';
import PlanetPage from './views/PlanetPage';
import NotFound from './views/NotFound';

function App() {

  const newSearch = (searchObj) => {
    navigate('/' + searchObj.category + '/' + searchObj.id, { replace: true });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Luke APIwalker</h1>
      </header>
      <SearchBar onNewSearch={newSearch}></SearchBar>
      <Router>
        <PersonPage path='people/:id' />
        <PlanetPage path='planets/:id' />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
