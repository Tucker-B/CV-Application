import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
const express = require('express');
const app = express();
const port = 3000;


app.get('/') (req, res) => {
    res.send(ReactDOM.render(<App />, document.getElementById('app')));
}

app.listen (port, () => {
    console.log(`Running on port: ${port}`);
});