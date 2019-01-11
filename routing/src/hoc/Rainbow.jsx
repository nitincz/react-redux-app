import React from 'react';

// Let this be a higher order component that wraps the given component in random color

const Rainbow = (ComponentToBeWrapped) => {

    let colors = ['red', 'green', 'blue', 'purple'];
    
    // Math.floor(Math.random() * (max - min + 1)) + min
    let randomColor = colors[Math.floor(Math.random() * 4)];
    let className = randomColor + '-text';

    // return an anonymous component that would be a wrapper to the given component
    return (props) => {
        return(
            <div className={ className }>
                <ComponentToBeWrapped {...props}/>
            </div>
    
        );
    }
}

export default Rainbow;