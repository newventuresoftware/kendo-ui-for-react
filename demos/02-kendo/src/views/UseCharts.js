import React from 'react';
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisTitle,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';


const [firstSeries, secondSeries, thirdSeries, fourthSeries] = [[100, 123, 234, 343], [120, 67, 231, 196], [45, 124, 189, 143], [87, 154, 210, 215]];
const categories = ['Q1', 'Q2', 'Q3', 'Q4'];

export default function UseCharts() {
    return (
        <Chart>
            <ChartTitle text="Units sold" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={categories}>
                    <ChartCategoryAxisTitle text="Months" />
                </ChartCategoryAxisItem>
            </ChartCategoryAxis>
            <ChartSeries>
                <ChartSeriesItem type="bar" gap={2} spacing={0.25} data={firstSeries} />
                <ChartSeriesItem type="bar" data={secondSeries} />
                <ChartSeriesItem type="bar" data={thirdSeries} />
                <ChartSeriesItem type="bar" data={fourthSeries} />
            </ChartSeries>
        </Chart>
    );
}