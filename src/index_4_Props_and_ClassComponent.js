var React =require('react');
var ReactDOM =require('react-dom');
var createClass=require('create-react-class');

var Component=createClass({
  render:function(props){
    // Whenever we are inside the class Component, to access props, we have to use 'this.props.<var>'.  In functional Component, it was 'props.<var>'
    return <h1 style={{color:this.props.color}}>{this.props.greeting}</h1>;
  }
});

ReactDOM.render(<Component greeting="Hello World Prop" color="green" />,document.getElementById('root'));
