import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
const express = require('express');
const server = express();
const port = 3000;


server.get('/') (req, res) => {
    res.send(ReactDOM.render(<App />, document.getElementById('app')));
}

server.listen (port, () => {
    console.log(`Running on port: ${port}`);
});