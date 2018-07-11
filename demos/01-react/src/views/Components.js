import React from 'react';

const countries = ["Austria", "Bulgaria", "Germany", "Greece", "Hungary", "United Kingdom", "Vatican City", "USA"];

function Components() {
    return (
        <div>
            <ListComponent items={countries} title="Countries" />
        </div>
    );
}

class ListComponent extends React.Component {

    state = {
        selectedItem: null
    }

    render() {
        return (
            <div className="listComponent">
                <div>{this.props.title}:</div>
                <ol>
                    {this.props.items.map(country => (
                        <li className={country === this.state.selectedItem ? "selected" : ""} 
                            onClick={() => this.onClick(country)}>{country}</li>
                    ))}
                </ol>
            </div>
        );
    }

    onClick = (item) => {
        this.setState({
            selectedItem: item
        });
    }
}

export default Components;