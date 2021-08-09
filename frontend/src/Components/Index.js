import React from 'react';
import Header from './Core/Header';
import Footer from './Core/Footer';
import '../stylesheets/index.css';
const personalPhoto = 'https://d1thzj1j2dn3e9.cloudfront.net/imgs/front_picture.png';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main-div" className="index-component">
                <Header />
                <div id="content" className="">
                    <div className="content__introduction">
                        <h2 id="content__introduction__name">Tucker <br></br>Barton</h2>
                        <div id="content__introduction__img-div">
                            <img id="content__introduction__img"src={personalPhoto} className="" alt="Picture of Tucker Barton" width="250" height="300"></img>
                        </div>
                        <h2 id="content__introduction__role">Web<br></br>Developer</h2>
                    </div>
                    <div id="bio-description" className="row">
                        <div className="bio-description__p-div">
                            <h3 id="bio-description__yokoso">ようこそ！</h3>
                            <p className="bio-description__p"><span className="green-text">Hi, I'm Tucker!</span> I am a web developer located in the Metro Atlanta area in the wonderful state of Georgia, US. I am attending the <i className="green-text">University of Georgia</i> at which I am a senior learning Japanese. I will be graduating this fall of 2021! </p>

                            <p className="bio-description__p">I have been interested in computers for as long as I can remember, always tinkering with my surroundings and wondering how things actually worked.</p>

                            <p className="bio-description__p">When I learned of the world of software development, I jumped right in and fell in love.</p>

                            <p className="bio-description__p">I am currently learning technologies such as <i className="green-text">React.js</i>, <i className="green-text">Express.js</i>, and <i className="green-text">Node</i>, while also continually improving by looking to leading developers and thinkers of the industry.</p>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Index;