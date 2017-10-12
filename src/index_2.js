import React from 'react';
import ReactDOM from 'react-dom';

//  syntax
// React.createElement(type,attrs/props, ...children);
// Create a react element similar to <h1> header
//var App=React.createElement('h1',null,'Hello World Kishor');

// JSX syntax for creating element
var App=<h1>Hello World</h1>;

// React COmponent (Needs to return JSX code)
// First letter needs to be capital when used as JSX during render as it knows that its a custom Component rather than a native in the DOM
var Component=function(){
  return(
      <h1>Hello World Component</h1>
  );
};

// We need to tell react to take our 'App' element and display it on the webpage using DOM
// Arguments for render=>(What to render, where to render)
//ReactDOM.render(App,document.getElementById('root'));

// Render React Component
//ReactDOM.render(React.createElement(Component),document.getElementById('root'));

// Render React Component Use the JSX
//ReactDOM.render(<Component></Component>,document.getElementById('root'));
// or (when <Component> has no children)
ReactDOM.render(<Component/>,document.getElementById('root'));
