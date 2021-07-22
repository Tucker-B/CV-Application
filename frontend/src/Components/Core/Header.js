import React from 'react';
import NavBar from './NavBar';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header id="header">
                <h1 className="header__title">T.</h1>
                <NavBar />
            </header>
        )
    }
}

export default Header;