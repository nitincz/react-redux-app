import React, { Component } from 'react';

const Ninjas = ({ name, age, belt, id, deleteNinja}) => {

        return (
            <div className="ninja" id={id}>
                <div>Name: { name } </div>
                <div>Age: { age } </div>
                <div>Belt: { belt } </div>
                <button onClick= { () => { deleteNinja(id) } }>Delete</button>
            </div>
        );
}

export default Ninjas;