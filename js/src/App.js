import React from 'react';
import logo from './logo.svg';
import './App.css';

function showMovies() {
  window.fetch('/api/v1/movies')
    .then(response => response.json())
    .then((json) => console.log(json));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button onClick={showMovies}>Print a list of movies in the console!</button>
        </p>
      </header>
    </div>
  );
}

export default App;
