import React from 'react';
import svgs from '../../../public/imgs/sprite.svg';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer>
                <h3>Get In Contact</h3>
                <div id="footer__links">
                    <a href="https://github.com/Tucker-B/">
                        <span>@Tucker-B</span>
                        <svg class="index__icon">
                            <use xlinkHref={svgs + '#icon-github'}></use>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/tucker-barton/">
                        <span>@tucker-barton</span>
                        <svg class="index__icon">
                            <use xlinkHref={svgs + '#icon-linkedin'}></use>
                        </svg>
                    </a>
                </div>
                <div id="footer__name">
                    <span id="" className="">Tucker Barton</span>
                    <span className="">© Copyright 2021</span>
                </div>
                
            </footer>
        )
    }
}

export default Footer;