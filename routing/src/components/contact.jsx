import React from 'react';

const Contact = (props) => {

    // navigate to the new route
    setTimeout(() => {
        // push the new route to history to navigate to that
        props.history.push('/about');
    }, 2000);
    return(
        <div className="container">
            <h4 className="center">
                Contact
            </h4>
            <p>
                    Hello, welcome to my website!
            </p>
        </div>
    );
}

export default Contact