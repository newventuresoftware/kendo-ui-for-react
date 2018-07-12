import React from 'react';

const numbers = [5, 10, 15, 9, 333];

function Components() {
    return (
        <div>
            <SumAndDouble />
        </div>
    );
}

function SumAndDouble() {
    return (
        <div>
            <div>Sum and Double</div>
            <button>Double</button>
        </div>
    );
}

export default Components;