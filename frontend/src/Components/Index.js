import React from 'react';
import Header from './Core/Header';
import Footer from './Core/Footer';
import personalPhoto from '../../public/imgs/front_picture.png';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main-div" className="index-component">
                <Header />
                <div id="content" className="">
                    {/* <h2 className="green-text">ようこそ！</h2>
                    <h3 className="">Welcome! A little about me... </h3> */}
                    <div className="content__introduction">
                        <h2 id="content__introduction__name">Tucker <br></br>Barton</h2>
                        <img id="content__introduction__img"src={personalPhoto} className="" alt="Picture of Tucker Barton" width="250" height="300"></img>
                        <h2 id="content__introduction__role">Web<br></br>Developer</h2>

                    </div>
                    <div id="bio-description" className="row">
                        
                        <div className="bio-description__p-div">
                            <p className="bio-description__p"><span className="green-text">Hi, I'm Tucker!</span> I am an aspiring web developer located in the Metro Atlanta area in the wonderful state of Georgia, US. In addition, I have the great honor of attending the <i className="green-text">University of Georgia</i> at which I am a senior learning 日本語, or Japanese. </p>

                            <p className="bio-description__p">I have been interested in computers for as long as I can remember, always tinkering with my gadgets and wondering how things actually worked.</p>

                            <p className="bio-description__p">When I learned of the world of software development, I immediately knew that was what my career going forward would be.</p>

                            <p className="bio-description__p">I am currently learning technologies such as <i className="green-text">ReactJS</i>, <i className="green-text">ExpressJS</i>, and <i className="green-text">Node</i>, while also continually improving by looking to industry-wide best practices.</p>
                        </div>
                        
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Index;