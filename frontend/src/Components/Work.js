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
                <div class="content">
                    {/* <p><a href="https://github.com/Tucker-B">Here's my GitHub.</a></p> */}
                    <div id="cv-application" class="text-center">
                        <h3>CV Application</h3>
                    </div>
                    <div id="nihon-kawa" class="text-center">
                        <h3>Nihon Kawa | Blog</h3>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Work;