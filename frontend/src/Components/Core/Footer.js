import React from 'react';
import bootstrapIcons from '../../../node_modules/bootstrap-icons/bootstrap-icons.svg';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer>
                <br></br>
                <svg className=""  width="fill" height="32" fill="fillColor">
                    <a href="https://github.com/Tucker-B"><use width="97%" xlinkHref={`${bootstrapIcons}#github`}></use></a>
                    <a href="https://www.linkedin.com/in/tucker-barton/"><use width="103%"xlinkHref={`${bootstrapIcons}#linkedin`}></use></a>
                </svg>
                <p id="footerParagraph" className="text-center">Tucker Barton</p>
                <p className="text-center">© Copyright 2021</p>
            </footer>
        )
    }
}

export default Footer;