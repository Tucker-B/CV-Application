import React from 'react';
import NavBar from './NavBar';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header id="header">
                <h1>Tucker Barton</h1>
                <span>
                    <h3 id="headerDescription">Web Developer & Language Learner</h3>
                    <NavBar />
                </span>
            </header>
        )
    }
}

export default Header;