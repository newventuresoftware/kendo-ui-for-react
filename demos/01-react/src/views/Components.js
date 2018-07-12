import React from 'react';

const numbers = [5, 10, 15, 9, 333];

function Components() {
    return (
        <div>
            <SumAndDouble numbers={numbers} />
        </div>
    );
}

class SumAndDouble extends React.Component {

    constructor(props) {
        super();

        this.state = {
            sum: props.numbers.reduce((sum, x) => sum + x)
        }
    }

    render() {
        return (
            <div>
                <div>Sum and Double</div>
                <div>{this.state.sum}</div>
                <button onClick={this.onDouble}>Double</button>
            </div>
        );
    }

    onDouble = (e) => {
        this.setState({
            sum: this.state.sum * 2
        })
    }
}

export default Components;