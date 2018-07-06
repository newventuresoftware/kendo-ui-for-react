import React from 'react';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

export default class UseKendo extends React.Component {
    state = {
        name: "",
        updatedName: "",
        people: []
    }

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <form className="k-form-inline">
                    <label className="k-form-field">
                        <span>Name</span>
                        <Input name="name" value={this.state.name} onChange={this.onChange} />
                        <Button
                            primary={true}
                            onClick={this.onUpdate}>
                            Update
                    </Button>
                    </label>
                </form>
                <div>
                    <span>Updated name: {this.state.updatedName}</span>
                </div>
                <div className="data">
                    {this.state.people.map(p => (
                        <div className="person" key={p.id}>{p.first_name} {p.last_name}</div>
                    ))}
                </div>
            </div>
        );
    }

    componentDidMount() {
        fetch("/data/people.json")
            .then(response => {
                return response.json();
            })
            .then(people => {
                this.setState({
                    people: people
                })
            });
    }

    onChange = (e) => {
        this.setState({
            name: e.value
        });
    }

    onUpdate = (e) => {
        e.preventDefault();
        this.setState({
            updatedName: this.state.name
        })
    }
}