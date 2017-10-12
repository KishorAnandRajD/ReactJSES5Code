import React from 'react';
import ReactDOM from 'react-dom';

// USage of props
var Component=function(props){
  console.log(props);

  var styleh1={
    color:props.color
  };

  return(
    //  <h1 style={styleh1}>{props.greeting}</h1>
    // or  
      <h1 style={{color:props.color}}>{props.greeting}</h1>
  );
};

ReactDOM.render(<Component greeting="Hello World Prop" color="green" />,document.getElementById('root'));
