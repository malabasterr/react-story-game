import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

reportWebVitals();

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>, 
  document.getElementById('root')
);
