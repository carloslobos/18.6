var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('getDefaultProps property is a function that returns an Object to create initial props.')
        
    },
    getInitialState: function() { 
        console.log('Define initialize state');
        return {
            counter: 0,
           
        };
    },
    componentWillMount: function() { 
        console.log('This method is called just before a component mounts on the DOM or the render method is called. After this method, the component gets mounted.') 
    },
    componentDidMount: function() {
        console.log('This method is a good place to set up any subscriptions.') 
    },
    componentWillReceiveProps: function(){
        console.log('This method is called when props are passed to the Component instance.')
    },
    shouldComponentUpdate: function () {
        console.log('This method allows your Component to exit the Update life cycle if there is no reason to apply a new render.');
        return true
    },
    componentWillUpdate: function () {
        console.log('This method is called when method shouldComponentUpdate() has value: true.')
    },
    componentDidUpdate: function () {
        console.log('It can be useful to perform some action when the state changes.')
    }, 
    componentWillUnmount : function () {
        console.log('It is the last function to be called immediately before the component is removed from the DOM. It is generally used to perform clean-up for any DOM-elements')
    },
     increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    zero: function() {
        this.setState({
            counter: this.state.counter = 0
        });
    },

    

    render: function() {            
        console.log('The render function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.')
        return React.createElement('div', {},
            React.createElement('h1', {}, 'Just a counter.'),
            React.createElement('span', {}, this.state.counter),
            React.createElement('button', { onClick: this.increment }, '+'),
            React.createElement('button', { onClick: this.decrement }, '-'),
            React.createElement('Button', { onClick: this.zero }, '0'),
        );
    },

   

});

var element = React.createElement('div', {},
    React.createElement(Counter, {}),
    React.createElement(Counter, {}),
    React.createElement(Counter, {}))
ReactDOM.render(element, document.getElementById('app'));