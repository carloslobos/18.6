var Counter = React.createClass({
    getDefaultProps: function() {
        return {
            console: console.log('getDefaultProps property is a function that returns an Object to create initial props.')
        }
    },
    getInitialState: function() {
        return {
            counter: 0,
            console: console.log('Define initialize state')
        };
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
    // red: function() {
    //     this.setState({
    //         createClass: 'red'
    //     })
    // },
    componentWillMount: function() {
        return {
            console: console.log('This method is called just before a component mounts on the DOM or the render method is called. After this method, the component gets mounted.')
        }
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('h1', {}, 'Just a counter.'),
            React.createElement('span', {}, this.state.counter),
            React.createElement('button', { onClick: this.increment }, '+'),
            React.createElement('button', { onClick: this.decrement }, '-'),
            React.createElement('Button', { onClick: this.zero }, '0'),
            console.log('The render function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.')
            // React.createElement('button', { onClick: this.red },
            //     React.createElement('', { className: 'red', red }))
        );
    },

    componentDidMount: function() {
        return {
            console: console.log('This method is a good place to set up any subscriptions.')
        }
    }

});

var YourKilo = React.createClass({
    getInitialState: function() {
        return {
            kilo: 70
        }
    },
    increment: function() {
        this.setState({
            kilo: this.state.kilo + 1
        });
    },
    decrement: function() {
        this.setState({
            kilo: this.state.kilo - 1
        });
    },
    start: function() {
        this.setState({
            kilo: this.state.kilo = 70
        });
    },
    render: function() {
        return React.createElement('div', {},
            React.createElement('h1', {}, 'Your weight.'),
            React.createElement('span', {}, this.state.kilo + 'kg'),
            React.createElement('button', { onClick: this.increment }, 'Add some kgs'),
            React.createElement('button', { onClick: this.decrement }, 'Remove some kgs'),
            React.createElement('button', { onClick: this.start }, 'Reset your weight')
        );
    }

})

var element = React.createElement('div', {},
    React.createElement(Counter, {}),
    React.createElement(Counter, {}),
    React.createElement(YourKilo, {}))
ReactDOM.render(element, document.getElementById('app'));