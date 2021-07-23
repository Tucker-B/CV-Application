import React from 'react';
import Header from './Core/Header';
import Footer from './Core/Footer';
import '../stylesheets/about.css';
import Seoul_Pic from '../../public/imgs/seoul_night_pic.jpeg'
import Shrine_Pic from '../../public/imgs/japanese_shinto_gates_pic.jpeg'
import Code_Pic from '../../public/imgs/code_pic_dark.jpeg'
import Logo from '../../public/imgs/SVG/tb_icon_new.svg';

class About extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main-div" className="about-component">
                <Header />
                <div id="content" className="">
                    <h3 id="about__hi"className="">Hey, I'm Tucker</h3>
                    <div className="about__description">

                        <p className="about__description__introduction" >Hi! I'm a web developer and student attending the University of Georgia (Go Dawgs!)</p>
                        <img src={Shrine_Pic} className="" width="400px" height="300px"></img>
                        <br></br>

                        <h3 className="about__title">Technology</h3>
                        <p className="about__description__technology" >As someone who loves learning and constantly refining myself, I'm currently learning the world of frontend libraries and tech, including React.js and UI/UX design principles. On the backend, I'm continuing my studies of using JavaScript/Node.js on the server side by developing this website, as well as my Japanese blog website, <i>Loop Blog</i> with Django/Python!</p>
                        <img src={Code_Pic} className=""width="400px" height="300px"></img>
                        <br></br>

                        <h3 className="about__title">Language</h3>
                        <p className="about__description__language" >Language learning is also a passion of mine. I'm currently taking Japanese classes at my university, as well as studying on my own. By the end of the year I hope to take the 日本語能力試験, or the Japanese Language Placement Test (JLPT for short) that is overseen by the Japanese government. I also want to take on Korean next year (Oppa Gangnam Style!)</p>
                        <img src={Seoul_Pic} className=""width="400px" height="300px"></img>
                        <br></br>

                        <h3 className="about__title">Hiring?</h3>    
                        <p id="about__hiring">I'm open to development-related job opportunities! If interested, please reach out to me by email at <address ><a href="mailto:tuckergbarton@gmail.com"><span className="orange-text">tuckergbarton@gmail.com</span></a></address> or by phone at <span className="orange-text">(404) 900-8032</span>. Thanks!</p>                    
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;