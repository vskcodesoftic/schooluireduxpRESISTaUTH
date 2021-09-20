import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ToastContainer, Slide } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from './Layout';
import './index.css'


// setup fake backend
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

