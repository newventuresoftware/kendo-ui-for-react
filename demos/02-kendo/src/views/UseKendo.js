import React from 'react';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Grid, GridColumn as Column, GridCell } from '@progress/kendo-react-grid';
import { orderBy} from '@progress/kendo-data-query';

export default class UseKendo extends React.Component {
    state = {
        name: "",
        updatedName: "",
        gridSort: [],
        gridData:[]
    }

    people = [];

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
                <Grid
                    style={{ maxHeight: '400px' }}
                    sortable={true}
                    sort={this.state.gridSort}
                    onSortChange={this.onSortChange}
                    data={this.state.gridData}>
                    <Column field="first_name" title="First Name" />
                    <Column field="last_name" title="Last Name" />
                    <Column field="country" title="Country" />
                </Grid>
            </div>
        );
    }

    onSortChange = (event) => {
        this.setState({
            gridSort: event.sort,
            gridData: this.getGridData(event.sort)
        })
    }

    getGridData(sort) {
        return orderBy(this.people, sort);
    }

    componentDidMount() {
        fetch("/data/people.json")
            .then(response => {
                return response.json();
            })
            .then(people => {
                this.people = people;
                this.setState({
                    gridData: this.getGridData([])
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