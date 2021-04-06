import React from 'react';
import Header from './Core/Header';
import Footer from './Core/Footer';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="mainDiv">
                <Header />
                <div id="bodyDiv">
                    <h2>ようこそ！</h2>
                    <h3>Welcome! A little about me... </h3>
                    <div id="paragraphDiv">
                        <p>Why hello there. My name is Tucker Barton. I am an aspiring web developer located in the Metro Atlanta area in the wonderful state of Georgia, US. In addition, I have the great honor of attending the <i>University of Georgia</i> at which I am a senior learning 日本語, or Japanese. </p>

                        <p>I have been interested in computers for as long as I can remember, always tinkering with my gadgets and wondering how things actually worked.</p>

                        <p>When I learned of the world of software development, I immediately knew that was what my career going forward would be.</p>

                        <p>I am currently learning technologies such as <i>ReactJS</i>, <i>ExpressJS</i>, and <i>Node</i>, while also continually improving by looking to industry-wide best practices.</p>
                    </div>

                    <button>My Résumé</button>
                
                </div>
                <Footer />
            </div>
            
        )
    }
}

export default Index;