import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

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