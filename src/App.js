import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gifs from './gifs/gifs';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Truck Gifs</h1>
        </header>
        <Gifs />
      </div>
    );
  }
}

export default App;
