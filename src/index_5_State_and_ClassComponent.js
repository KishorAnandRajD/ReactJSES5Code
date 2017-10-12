var React =require('react');
var ReactDOM =require('react-dom');
var createClass=require('create-react-class');

var Component=createClass({
  // ','  after a function
  getInitialState:function(){
    return {
      color:'blue'
    };
  },
  handleButtonClick:function(){
    // Using this.setState will re-render the Component
    this.setState(function(prevState){
      console.log(prevState);
      return {
        color:(prevState.color==='blue'?'green':'blue')
      };
    });
  },
  render:function(props){
    console.log('inside render method :',this.state.color);
    // Whenever we are inside the class Component, to access props, we have to use 'this.props.<var>'.  for State its 'this.state.<var>'
    return (
      <div>
        <h1 style={{color:this.state.color}}>{this.props.greeting}</h1>
        <button onClick={this.handleButtonClick}>Change Color</button>
      </div>
    )
  }
});

ReactDOM.render(<Component greeting="Hello World Prop"  />,document.getElementById('root'));
