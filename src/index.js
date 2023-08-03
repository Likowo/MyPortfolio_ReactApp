import { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
//Import BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
// import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// Wrap the App Component ( placed within a self closing tag < />) with the Router component to enable the router features
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
     <App/>
    </Router> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
