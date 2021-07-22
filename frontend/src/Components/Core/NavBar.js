import React from 'react';
import '../../stylesheets/reset.css';
import '../../stylesheets/styles.css';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav className="header__nav">
                <ul className="">
                    <li className="nav-item" id="nav-home"><Link to="/">Home</Link></li>
                    <li className="nav-item" id="nav-about"><Link to="/about">About</Link></li>
                    <li className="nav-item" id="nav-work"><Link to="/work">My Work</Link></li>
                    <li className="nav-item" id="nav-contact"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;