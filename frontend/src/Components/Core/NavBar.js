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
            <div id="navBar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/work">My Work</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;