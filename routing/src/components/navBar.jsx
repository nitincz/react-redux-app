import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';

const NavBar = (props) => {
    console.log(props);
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="" className="brand-logo">My Website</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

// return a super-charged, higher order component
export default withRouter(NavBar);