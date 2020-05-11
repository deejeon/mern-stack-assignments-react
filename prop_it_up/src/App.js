import React from 'react';

import PersonCard from './components/PersonCard';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black"></PersonCard>
        <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown"></PersonCard>
        <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"></PersonCard>
        <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown"></PersonCard>
      </header>
    </div>
  );
}

export default App;
