import React, { Component } from 'react';
import { Chart } from '@progress/kendo-charts-react-wrapper';
import { process, orderBy, filterBy } from '@progress/kendo-data-query';

function toHours(milliseconds) {
    return Math.round(milliseconds / (1000*60*60), 3);
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
    var chartOptions = {
        dataSource: chartData,
        series: [
            {
                field: "hours"
            },
        ],
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "bar"
        },
        categoryAxis: [{
            field: "projectName"
        }],
        valueAxis: {
            majorUnit: 200,
            line: {
                visible: false
            },
            minorGridLines: {
                visible: false
            },
        },
        tooltip: {
            visible: true,
            template: "#= value # hours"
        }
    }

    return (
        <div className="appView dashboard">
            <header>Hours by Project</header>
            <Chart {...chartOptions} />
        </div>
    );
}