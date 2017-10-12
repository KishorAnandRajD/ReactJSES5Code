var React =require('react');
var ReactDOM =require('react-dom');
var ShowComponent=require('./show');
var showJason=require('./shows'); // JSON file


//ReactDOM.render(<ShowComponent show={showJason[1]}/>,document.getElementById('root'));

// Show all
// ReactDOM.render(
//   <div>
//     <ShowComponent show={showJason[0]}/>
//     <ShowComponent show={showJason[1]}/>
//     <ShowComponent show={showJason[2]}/>
//     <button onClick="this.handleButtonClick">Next Show </button>
//   </div>
//   ,document.getElementById('root'));

  ReactDOM.render(
    <div>
      <ShowComponent showJason={showJason} showIndex={0}/>
    </div>
    ,document.getElementById('root'));
