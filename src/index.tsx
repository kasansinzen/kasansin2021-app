import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { FirebaseDatabaseProvider } from "@react-firebase/database";

import './index.scss';
import reportWebVitals from './reportWebVitals';
import RouteController from "./RouteController";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import 'magnific-popup/src/css/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><RouteController /></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
