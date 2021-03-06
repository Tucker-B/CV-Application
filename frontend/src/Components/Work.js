import React from 'react';
import Header from './Core/Header';
import Footer from './Core/Footer';
import '../stylesheets/work.css';
const Blog_Pic = 'https://d1thzj1j2dn3e9.cloudfront.net/imgs/japanese_writing_pic.jpeg';
const Code_Pic = 'https://d1thzj1j2dn3e9.cloudfront.net/imgs/code_2.jpeg';

class Work extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main-div" className="work-component">
                <Header />
                <div id="content" className="">
                    {/* <p><a href="https://github.com/Tucker-B">Here's my GitHub.</a></p> */}
                    <div id="cv-application" class="">
                        <a href="https://github.com/Tucker-B/CV-Application">
                            <h3 className="">CV Application | Personal Site</h3>
                            <img src={Code_Pic} className=""></img>
                        </a>
                        
                    </div>
                    <div id="loop-blog" class="">
                        <a href="https://github.com/Tucker-B/loop_blog">
                            <h3 className="">Loop Blog | Japanese Blog</h3>
                            <img src={Blog_Pic} className=""></img>
                        </a>
                        
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Work;