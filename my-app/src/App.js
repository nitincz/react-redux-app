import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello React App!
          </p>
        </header>
        <Ninjas name="Pikachu" age="5" belt="yellow" />
        <Ninjas name="Bulbasaur" age="9" belt="blue" />
      </div>
    );
  }
}

export default App;
