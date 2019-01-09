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
        <Ninjas />
      </div>
    );
  }
}

export default App;
