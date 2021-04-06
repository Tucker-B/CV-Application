import React from 'react';
import Header from './Core/Header';
import Footer from './Core/Footer';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="container">
                <Header />
                <div id="content">
                    <p>This is the About page</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;