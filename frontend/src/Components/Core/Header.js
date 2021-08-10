import React from 'react';
import NavBar from './NavBar';
const Logo = 'https://d1thzj1j2dn3e9.cloudfront.net/imgs/SVG/tb_icon_new.svg';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header id="header">
                <img className="header__logo" src={Logo} alt="Website logo"></img>
                <NavBar />
            </header>
        )
    }
}

export default Header;