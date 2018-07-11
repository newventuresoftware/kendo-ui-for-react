import React from 'react';

const countries = ["Austria", "Bulgaria", "Germany", "Greece", "Hungary", "United Kingdom", "Vatican City", "USA"];

class Components extends React.Component {

    state = {
        selectedCountry: countries[2]
    }

    render() {
        return (
            <div>
                <ListComponent
                    items={countries}
                    title="Countries"
                    onItemSelected={this.onCuntrySelected}
                    selectedItem={this.state.selectedCountry} />
            </div>
        );
    }

    onCuntrySelected = (country) => {
        this.setState({
            selectedCountry: country
        });
    }
}

function ListComponent(props) {
    return (
        <div className="listComponent">
            <div>{props.title}:</div>
            <ol>
                {props.items.map(country => (
                    <li key={country}
                        className={country === props.selectedItem ? "selected" : ""}
                        onClick={() => props.onItemSelected(country)}>{country}</li>
                ))}
            </ol>
        </div>
    );
}

export default Components;