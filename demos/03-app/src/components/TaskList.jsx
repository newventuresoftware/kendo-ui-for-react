import React, { Component } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Grid, GridColumn as Column, GridCell } from '@progress/kendo-react-grid';
import { process, orderBy, filterBy } from '@progress/kendo-data-query';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        let deleteHandler = this.props.deleteTask.bind(this);
        this.CommandCell = class CommandCell extends GridCell {
            render() {
                return (
                    <td>
                        <Button icon="delete" className="iconButton"
                            onClick={(e) => deleteHandler(this.props.dataItem)} />
                    </td>
                )
            }
        };
    }

    getSortedTasks(tasks) {
        const result = process(tasks, {
            sort: [{ field: 'startTime', dir: 'desc' }],
            filter: {
                logic: "and",
                filters: [
                    { field: "startTime", operator: "neq", value: null },
                ]
            }
        });

        return result.data;
    }

    render() {

        let gridOptions = {
            style: {},
            data: this.getSortedTasks(this.props.tasks),
            scrollable: "none"
        }

        return (
            <div className="taskList">
                <Grid {...gridOptions}>
                    <Column field="title" title="Task" />
                    <Column field="projectName" title="Project" />
                    <Column field="durationString" title="Duration" width="100px" />
                    <Column cell={this.CommandCell} width="50px" />
                </Grid>
            </div>
        );
    }
}

export default TaskList;