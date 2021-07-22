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
                        <div className="svg-container">
                            <p className="">
                                <span className="green-text">Phone:</span> (678) 739-7666
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