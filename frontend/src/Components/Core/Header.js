import React from 'react';
import NavBar from './NavBar';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header id="header">
                <h1 className="text-center">Tucker Barton</h1>
                <div className="row navInline">
                    <NavBar />
                </div>
            </header>
        )
    }
}

export default Header;