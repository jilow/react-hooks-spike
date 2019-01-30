import React, { Component } from 'react';
import { Counter } from './Counter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter name='Hooks Demo' />
        </header>
      </div>
    );
  }
}

export default App;
