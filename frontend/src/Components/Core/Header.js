import React from 'react';
import NavBar from './NavBar';
const Logo = 'https://personal-site-imgs.s3.amazonaws.com/imgs/SVG/tb_icon_new.svg';

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