import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appp from './Appp';
import reportWebVitals from './reportWebVitals';
import MyComponent from './Mycomponent';
import GreetUser from './greetuser.js';
import StylingDemo from './stylingdemo';
import StylingDemo1 from './stylingdemo1';
import App from './App';
import Homepage from './homepage_component';
import CategoryContainerComponent from './components1/category-container/CategoryContainerComponent';


ReactDOM.render(
  <React.StrictMode>
    <CategoryContainerComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
