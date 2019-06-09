"use strict"

// compononet must start with capitalletter and have one method at lest render method
// or es 2015 class ReactDom extends React.Component{
var ReactDemo = React.createClass({
    render: function(){
        return(
            <div>This is a simple Reactjs component</div>
        );
    }
});

ReactDOM.render(
    <ReactDemo />,
    document.getElementById('content')
);