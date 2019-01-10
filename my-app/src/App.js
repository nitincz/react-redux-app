import React, { Component } from 'react';
import NinjasList from './NinjasList';


class App extends Component {

 state = {
    ninjas: [ 
        { name: "pikachu",  age: "25", belt: "yellow", id: "10" },
        { name: "bulbasaur",  age: "26", belt: "blue", id: "11" }
    ]
 }
  render() {
    return (
      <NinjasList ninjas={ this.state.ninjas } />
    );
  }
}

export default App;
