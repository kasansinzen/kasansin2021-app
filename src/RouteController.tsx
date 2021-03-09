import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './pages/App';
import Footer from './components/Footer';
import Header from './components/Header';


export default (props: any) => (
  <Provider store={props.store}>
    <Router>
      <Header />
        <Route exact path="/" component={App} />
      <Footer />
    </Router>
  </Provider>
);