import React from 'react';
const github_svg = 'https://personal-site-imgs.s3.amazonaws.com/imgs/SVG/github.svg';
const linkedin_svg = 'https://personal-site-imgs.s3.amazonaws.com/imgs/SVG/linkedin.svg';

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
                        <img src={github_svg} className="footer-svgs"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/tucker-barton/">
                        <span>@tucker-barton</span>
                        <img src={linkedin_svg} className="footer-svgs"></img>
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