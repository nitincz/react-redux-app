import React, { Component } from 'react';
import Ninjas from './Ninjas';


class NinjasList extends Component {

    render() {
        const { ninjas, minAge } = this.props
        const allNinjas = ninjas.map(ninja =>  {

            if (ninja.age < minAge) return (null);

            return(
                <Ninjas name={ ninja.name } age={ ninja.age} belt={ ninja.belt } key={ ninja.id } id={ ninja.id } deleteNinja={ this.props.deleteNinja }/>
            );
        });
        console.log(allNinjas);

        return(
            <div className="ninjas-list">
                { allNinjas }
            </div>
        );
    }
}

export default NinjasList;