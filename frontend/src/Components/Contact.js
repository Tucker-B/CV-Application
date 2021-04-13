import React from 'react';
import Header from './Core/Header';
import Footer from './Core/Footer';
import bootstrapIcons from '../../node_modules/bootstrap-icons/bootstrap-icons.svg';

class Contact extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="container">
                <Header />
                <div className="content">
                    <div className="contact-info">
                        <h3 className="text-center display-6">Ways to Contact Me</h3>
                        <div className="svg-container">
                            <p className="text-center contact-info contact-content">
                                Phone: (678) 739-7666
                                {/* <svg className="inline"  width="fill" height="fill" fill="fillColor">
                                    <use xlinkHref={`${bootstrapIcons}#telephone`}></use>
                                </svg> */}
                            </p>
                        </div>
                        
                        <address className="text-center contact-info contact-content"><a href="mailto:tuckergbarton@gmail.com">Email: tuckergbarton@gmail.com</a></address>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact;