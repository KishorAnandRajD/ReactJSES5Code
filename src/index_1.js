import React from 'react';
import ReactDOM from 'react-dom';

//  syntax
// React.createElement(type,attrs/props, ...children);
// Create a react element similar to <h1> header
var App=React.createElement('h1',null,'Hello World Kishor');

// JSX syntax for creating element
//var AppJSX=<h1>Hello World</h1>;
var AppJSXFruits=(
    <ul>
      <li>Apple</li>
      <li>Orange</li>
      <li>Mango</li>
    </ul>
)

// We need to tell react to take our 'App' element and display it on the webpage using DOM
// Arguments for render=>(What to render, where to render)
//ReactDOM.render(App,document.getElementById('root'));
// Use the JSX
ReactDOM.render(AppJSXFruits,document.getElementById('root'));
