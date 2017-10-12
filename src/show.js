var React=require('react');
var createClass=require('create-react-class');

var Title=createClass({
  render:function(){
    return(
      <h3>Title: {this.props.showTitle}</h3>
    );
  }
});

var Poster=createClass({
  render:function(){
    return(
      <img src={this.props.showPoster} alt="Show Poster" style={{height:400,width:400}}/>
    );
  }
});

var ShowInfo=createClass({
  render:function(){
    return(
      <div>
          <p>{this.props.showPlot}</p>
          <h5>IMDB Rating:{this.props.showIMDBRating}</h5>
      </div>
    );
  }
});

// Overall Main component
var Show=createClass({

// Initialize the props
getDefaultProps:function(){
  return{
    showIndex:0
  };
},

getInitialState:function(props){
  return{
    //showIndex:0  // hardcoded
    //showIndex:this.props.showIndex // From props of index.js
    //showIndex:(this.props.showIndex || 0) // From props of index.js if present, else 0
    showIndex:(this.props.showIndex) // From props of index.js or initialization from getDefaultProps()
  };
},
handleButtonClick:function(){
    var totalShows=this.props.showJason.length;

    this.setState(function(prevState){
      return{
        showIndex:(prevState.showIndex+1) % totalShows // mod function (after its greater than 2, it's reset to 0)
      }
    });
},
render:function(){
    var show=this.props.showJason[this.state.showIndex];


    return(
      <div className="text-center">
        <Title showTitle={show.title}/>
        <Poster showPoster={show.poster}/>
        <ShowInfo showPlot={show.plot} showIMDBRating={show.imdbRating}/>
        <button onClick={this.handleButtonClick}>Next Show </button>
      </div>
    );
  }
});

module.exports=Show;
