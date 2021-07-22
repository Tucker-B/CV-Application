import React from 'react';
import Header from './Core/Header';
import Footer from './Core/Footer';

class Contact extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main-div" className="contact-component">
                <Header />
                <div className="content">
                    <div className="contact-info">
                        <h3 className="">Ways to Contact Me</h3>
                        <div className="">
                            <p className="">
                                <span className="">Phone:</span> (404) 900-8032
                                {/* <svg className="inline"  width="fill" height="fill" fill="fillColor">
                                    <use xlinkHref={`${bootstrapIcons}#telephone`}></use>
                                </svg> */}
                            </p>
                        </div>
                        
                        <address className=""><a href="mailto:tuckergbarton@gmail.com"><span className="green-text">Email:</span> tuckergbarton@gmail.com</a></address>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact;