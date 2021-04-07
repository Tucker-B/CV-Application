import React from 'react';
import '../../stylesheets/reset.css'
import '../../stylesheets/styles.css'
import { Link } from 'react-router-dom'


class NavBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="navbar lessPM">
                <ul className="mx-auto content-center">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item"><Link to="/work">My Work</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;