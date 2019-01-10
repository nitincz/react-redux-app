import React, { Component } from 'react';
import NinjasList from './NinjasList';


class App extends Component {

 state = {
    ninjas: [ 
        { name: "pikachu",  age: "19", belt: "yellow", id: "10" },
        { name: "bulbasaur",  age: "26", belt: "blue", id: "11" }
    ],

    minAge: 20
 }
  render() {
    return (
      <NinjasList ninjas={ this.state.ninjas } minAge={ this.state.minAge }/>
    );
  }
}

export default App;
