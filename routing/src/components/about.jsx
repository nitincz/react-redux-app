import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return(
        <div className="container">
            <h4 className="center">
                About
            </h4>
            <p>
                Hello, welcome to my website!
            </p>
        </div>
    );
}

export default Rainbow(About);