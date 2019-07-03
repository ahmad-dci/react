"use strict"

// compononet must start with capitalletter and have one method at lest render method
// or es 2015 class ReactDom extends React.Component{
var ReactDemo = React.createClass({
    render: function(){
        return(
            <div>
            <CommentBox Classname="lion" content="commentBox" />
            <EventGenerator />
            <div>This is a simple Reactjs component</div>
            </div>
        );
    }
});

var CommentBox = React.createClass({
    render: function(){
        return(
            <div>{this.props.content}</div>
        );
    }
});
var EventGenerator = React.createClass({
    render: function(){
        return(
            <button>
                Click me
            </button>
        );
    }
});

ReactDOM.render(
    <ReactDemo />,
    document.getElementById('content')
);