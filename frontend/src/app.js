import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Index from './Components/Index';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
