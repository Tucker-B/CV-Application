import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="mainDiv">
                <Header />
                <Body />
                <Footer />
            </div>
            
        )
    }
}

export default App;