import React from 'react';

class DomUpdates extends React.Component {

    state = {
        currentTime: new Date() 
    }

    render() {

        const timeToDisplay = this.state.currentTime.toLocaleTimeString();

        return (
            <div>
                <button onClick={this.onGetTimeClicked}>Get current time</button>
                <div>Current time is: {timeToDisplay} </div>
            </div>
        );
    }
        
    onGetTimeClicked = () => {
        this.setState({
            currentTime: new Date()
        })
    }
}

export default DomUpdates;