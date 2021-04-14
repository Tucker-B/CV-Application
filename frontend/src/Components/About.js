import React from 'react';
import Header from './Core/Header';
import Footer from './Core/Footer';
import Seoul_Pic from '../../public/imgs/seoul_night_pic.jpeg'
import Shrine_Pic from '../../public/imgs/japanese_shinto_gates_pic.jpeg'

class About extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="container">
                <Header />
                <div className="content row">
                    <h3 className="text-center">Hey, I'm Tucker</h3>
                    <div className="col-sm text-center">
                        <img src={Seoul_Pic} className="shadow rounded"width="400px" height="300px"></img>
                    </div>
                    <div className="about-content col-sm">
                        <p className="" >I'm a student attending the University of Georgia majoring in Japanese. I'm also an avid lover of technology and an aspiring web developer.</p>
                        <br></br>
                        <p className="" >As someone who loves learning and constantly refining myself, I'm currently learning the world of frontend libraries and tech, including React.js & Bootstrap 5. On the backend, I'm continuing my studies of using JavaScript on the server side and am developing this website, as well as <i>Nihon Kawa</i> with ExpressJS.</p>
                        <br></br>
                        <p className="" >Language learning is also a passion of mine. I'm currently taking Japanese classes at my university, as well as studying on my own. By the end of the year I hope to take the 日本語能力試験, or the Japanese Language Placement Test (JLPT for short) that is overseen by the Japanese government. Later this year, I'm gonna have a go at Korean as a lover of PSY and Korean tech alike.</p>
                    </div>

                    <div className="col-sm text-center">
                        <img src={Shrine_Pic} className="shadow rounded" width="400px" height="300px"></img>
                    </div>
                    
                    
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;