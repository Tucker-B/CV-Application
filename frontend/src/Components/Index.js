import React from 'react';
import Header from './Core/Header';
import Footer from './Core/Footer';
import personalPhoto from '../../public/imgs/Front_Picture_Smaller_Size.jpeg';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="mainDiv">
                <Header />
                <div id="bodyDiv" className="">
                    <h2 className="green-text">ようこそ！</h2>
                    <h3 className="h3-padded">Welcome! A little about me... </h3>
                    <div id="paragraphDiv" className="row">
                        <div className="col-md-4">
                            <img src={personalPhoto} className="img-thumbnail shadow" alt="Picture of Tucker Barton" width="250" height="300"></img>
                        </div>
                        <div className="col-md-8">
                            <p class="indexP"><span className="green-text">Hi, I'm Tucker!</span> I am an aspiring web developer located in the Metro Atlanta area in the wonderful state of Georgia, US. In addition, I have the great honor of attending the <i className="green-text">University of Georgia</i> at which I am a senior learning 日本語, or Japanese. </p>

                            <p class="indexP">I have been interested in computers for as long as I can remember, always tinkering with my gadgets and wondering how things actually worked.</p>

                            <p class="indexP">When I learned of the world of software development, I immediately knew that was what my career going forward would be.</p>

                            <p class="indexP">I am currently learning technologies such as <i className="green-text">ReactJS</i>, <i className="green-text">ExpressJS</i>, and <i className="green-text">Node</i>, while also continually improving by looking to industry-wide best practices.</p>
                        </div>
                        
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Index;