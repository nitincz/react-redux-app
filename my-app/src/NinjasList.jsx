import React, { Component } from 'react';
import Ninjas from './Ninjas';


class NinjasList extends Component {

    render() {
        const { ninjas } = this.props
        const allNinjas = ninjas.map(ninja =>  {
            return(
                <Ninjas name={ ninja.name } age={ ninja.age} belt={ ninja.belt } key={ ninja.id } />
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