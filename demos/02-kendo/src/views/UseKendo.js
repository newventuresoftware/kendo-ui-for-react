import React from 'react';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Notification } from '@progress/kendo-popups-react-wrapper';
import { orderBy, filterBy } from '@progress/kendo-data-query';

export default class UseKendo extends React.Component {
    state = {
        name: "",
        gridSort: [],
        gridFilter: []
    }

    people = [];

    constructor(props) {
        super();
    }

    render() {

        let gridData = this.getGridData(this.state.gridSort, this.state.gridFilter);

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
                <Grid
                    style={{ maxHeight: '400px' }}
                    sortable={true}
                    sort={this.state.gridSort}
                    onSortChange={this.onSortChange}
                    data={gridData}>
                    <Column field="first_name" title="First Name" />
                    <Column field="last_name" title="Last Name" />
                    <Column field="country" title="Country" />
                </Grid>
                <Notification widgetRef={(widget) => this.notificationWidget = widget} />
            </div>
        );
    }

    showNotificationForFilter = (name) => {
        this.notificationWidget.show("Filtering for: " + name);
    }

    onSortChange = (event) => {
        this.setState({
            gridSort: event.sort
        });
    }

    getGridData(sort, filter) {
        return filterBy(orderBy(this.people, sort), filter);
    }

    componentDidMount() {
        fetch("/data/people.json")
            .then(response => {
                return response.json();
            })
            .then(people => {
                this.people = people;
                this.setState({
                    gridSort: [],
                    gridFilter: []
                });
            });
    }

    onChange = (e) => {
        this.setState({
            name: e.value
        });
    }

    createFilterForName() {
        return {
            logic: 'and',
            filters: [
                { field: "first_name", operator: "contains", value: this.state.name, ignoreCase: true }
            ]
        }
    }

    onUpdate = (e) => {
        e.preventDefault();
        let filter = this.createFilterForName();
        this.showNotificationForFilter(this.state.name);

        this.setState({
            updatedName: this.state.name,
            gridFilter: filter
        })
    }
}