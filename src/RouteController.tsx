import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Footer from './components/Footer';
import Header from './components/Header';

class RouteController extends Component {
  render() {
    return (
      <Router>
        <Header />
          <Route exact path="/" component={App} />
          <Route exact path="/test" component={App} />
        <Footer />
      </Router>
    )
  }
}

export default RouteController;