import React from 'react';
import Header from './Core/Header';
import Footer from './Core/Footer';

class Work extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="container">
                <Header />
                <div id="content">
                    <p>This is the work page</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Work;