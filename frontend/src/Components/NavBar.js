import React from 'react';
import '../stylesheets/reset.css'
import '../stylesheets/styles.css'


class NavBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="navBar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Résumé</a></li>
                    <li><a href="https://github.com/Tucker-B ">GitHub</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;