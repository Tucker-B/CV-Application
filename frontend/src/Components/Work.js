import React from 'react';
import Header from './Core/Header';
import Footer from './Core/Footer';
import Blog_Pic from '../../public/imgs/japanese_writing_pic.jpeg';
import Code_Pic from '../../public/imgs/code_pic.jpeg';

class Work extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="container">
                <Header />
                <div class="content row">
                    {/* <p><a href="https://github.com/Tucker-B">Here's my GitHub.</a></p> */}
                    <div id="cv-application" class="text-center col-sm">
                        <a href="https://github.com/Tucker-B/CV-Application">
                            <h3>CV Application | Personal Site</h3>
                            <img src={Code_Pic} className="shadow rounded" width="300px" height="200px"></img>
                        </a>
                        
                    </div>
                    <div id="nihon-kawa" class="text-center col-sm">
                        <a href="https://github.com/Tucker-B/nihon_kawa">
                            <h3>Nihon Kawa | Japanese Blog</h3>
                            <img src={Blog_Pic} className="shadow rounded"width="300px" height="200px"></img>
                        </a>
                        
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Work;