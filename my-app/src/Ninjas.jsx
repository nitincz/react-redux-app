import React, { Component } from 'react';

const Ninjas = ({ name, age, belt}) => {

        return (
            <div className="ninja">
                <div>Name: { name } </div>
                <div>Age: { age } </div>
                <div>Belt: { belt } </div>
            </div>
        );
}

export default Ninjas;