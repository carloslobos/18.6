var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
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

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, this.state.counter),
            React.createElement('button', { onClick: this.increment }, '+'),
            React.createElement('button', { onClick: this.decrement }, '-'),
            React.createElement('Button', { onClick: this.zero }, '0'),
            // React.createElement('button', { onClick: this.red },
            //     React.createElement('', { className: 'red', red }))
        );
    },

});

var element = React.createElement(Counter, {})
ReactDOM.render(element, document.getElementById('app'));