import React from 'react';

export default class Lifecycle extends React.Component {

    // Initialize state (Happens before constructor) 
    state = { counter: 0 };

    // The first method called.
    constructor(props) {
        super(props);
        console.log('[constructor]');
        console.log(' State already set:', this.state);
    }

    // Called after initial render is done.
    componentDidMount() {
        console.log('[componentDidMount]');
    }

    // Called before initial render, and any time new props are received.
    // Should be rare for have a need for this method.
    // Check https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('[getDerivedStateFromProps]');
        console.log(' Next props:', nextProps);
        console.log(' Prev state:', prevState);
        return null;
    }

    // Called before each render. Return false to prevent rendering.
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[shouldComponentUpdate]', 'Deciding to update...');
        return true;
    }

    // Called after render() but before updating the DOM.
    // Used to do calculations based on old DOM nodes - scrolling offset, etc.
    // The value returned here is passed into componentDidUpdate
    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log('[getSnapshotBeforeUpdate]', 'About to update...');
        return `Time is ${Date.now()}`;
    }

    // Called after DOM has been updated.
    // Used to perform a side effect - data fetching, animation, etc.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[componentDidUpdate]', 'Updated.');
        console.log(' snapshot:', snapshot);
    }

    componentWillUnmount() {
        console.log('[componentWillUnmount]', 'Unmounting.');
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    render() {
        console.log('[render]');
        return (
            <div>
                <div><span>Counter: {this.state.counter}</span></div>
                <button onClick={this.handleClick}>
                    Click to increment
                </button>
            </div>
        );
    }
}