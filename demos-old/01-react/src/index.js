import React from 'react'
import ReactDom from 'react-dom'

const countries = [
    {
        code: "usa",
        text: "USA"
    },
    {
        code: "bg",
        text: "Bulgaria"
    },
    {
        code: "it",
        text: "Italy"
    },
    {
        code: "ger",
        text: "Germany"
    },
];

class ChooseItem extends React.Component {

    state = {
        selectedItem: null
    }

    componentWillMount() {
        console.log("ChooseItem - componentWillMount");
    }

    render() {
        console.log("ChooseItem - render");
        
        var children = [];
        for (var i = 0; i < this.props.items.length; i++) {
            let item = this.props.items[i];
            let isSelected = this.state.selectedItem === item;
            let classes = isSelected ? "chooseItemChild selected" : "chooseItemChild";

            children.push(<div className={classes} key={item.code}
                onClick={e => this.onItemClicked(item)}>{item.text}</div>);
        }

        return (
            <div className="chooseItem">
                <header>{this.props.title}</header>
                <div className="chooseItemChildren">{children}</div>
            </div>
        )
    }

    componentDidMount() {
        console.log("ChooseItem - componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("ChooseItem - componentWillReceiveProps");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("ChooseItem - componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("ChooseItem - componentDidUpdate");
    }

    onItemClicked = (item) => {

        this.setState({
            selectedItem: item
        });

        if(this.props.onSelect) {
            this.props.onSelect(item);
        }
    }
}

class App extends React.Component {

    state = {
        selectedItem: null
    }

    render() {
        return (
            <div>
                <div>Selected country: { this.state.selectedItem ? this.state.selectedItem.text : "" } </div>
                <ChooseItem title="Countries" items={countries} onSelect={this.handleCountrySelected} />
            </div>
        );
    }

    handleCountrySelected = (newSelected) => {

        if(newSelected.code === "it") {
            alert("Cannot select Italy!");
            return;
        }

        this.setState({
            selectedItem: newSelected
        });
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);