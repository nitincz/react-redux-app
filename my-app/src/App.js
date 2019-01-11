import React, { Component } from 'react';
import NinjasList from './NinjasList';
import AddNinja from './AddNinja';


class App extends Component {

    state = {
    ninjas: [ 
        { name: "pikachu",  age: "19", belt: "yellow", id: 0 },
        { name: "bulbasaur",  age: "26", belt: "blue", id: 1 }
    ],

    minAge: 20
    }

    // Life Cycle Methods
    componentDidUpdate(prevProps, prevState) {
        console.log('Component Updates');
        console.log(prevProps);
        console.log(prevState);
    }

    componentDidMount() {
        console.log('Component Mounted');
    }

    deleteNinja = (id) => {
        let remaining = this.state.ninjas.filter( ninja => {
            return ninja.id !== id
        });
        this.setState(
            {
                ninjas: remaining
            }
        );
    }

    // a function to update our ninjas state, that would be passed to another component.
    // We pass only the reference of this function not the component entirely
    addNinja = (ninja) => {
        ninja.id = this.state.ninjas.length + 1;

        // block scope variable (var is for function scope)
        // split the ninjas and add the values to a new array and then assign to a variable. This is merely copying an array
        let newNinjas = [...this.state.ninjas];
        newNinjas.push(ninja);

        // never update the state directly. Copy, update a new state in copy and then update
        this.setState({
            ninjas: newNinjas
        });
    }
    render() {
        return (
            <div id='app-wrapper'>
                <NinjasList ninjas={ this.state.ninjas } minAge={ this.state.minAge } deleteNinja={ this.deleteNinja }/>
                <AddNinja addNinja={ this.addNinja }/>
            </div>
        );
    }
}

export default App;
