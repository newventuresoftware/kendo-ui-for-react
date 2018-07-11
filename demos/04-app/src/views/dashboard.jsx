import React from 'react';
import { process } from '@progress/kendo-data-query';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

function toHours(milliseconds) {
    return Math.round(milliseconds / (1000 * 60 * 60), 3);
}

function prepareData(tasks) {

    const processed = process(tasks, {
        group: [{
            field: 'projectName',
            aggregates: [
                { aggregate: "sum", field: "duration" },
            ]
        }],
        filter: {
            logic: "and",
            filters: [
                { field: "duration", operator: "neq", value: null }
            ]
        }
    });

    var data = processed.data.map(d => ({
        projectName: d.value,
        hours: toHours(d.aggregates.duration.sum)
    }));

    return data;
}

export default function DashboardView(props) {

    var chartData = prepareData(props.tasks);

    return (
        <div className="appView dashboard">
            <header>Hours by Project</header>
            <Chart>
                <ChartSeries>
                    <ChartSeriesItem data={chartData} type="bar" field="hours" categoryField="projectName" />
                </ChartSeries>
            </Chart>
        </div>
    );
}