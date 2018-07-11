import React from 'react';
import { Calendar } from '@progress/kendo-react-dateinputs';
import { Button } from '@progress/kendo-react-buttons';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle
} from '@progress/kendo-react-charts';

const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const firstSeries = [123, 276, 310, 212, 240, 156, 98];
const secondSeries = [165, 210, 287, 144, 190, 167, 212];
const thirdSeries = [56, 140, 195, 46, 123, 78, 95];

export default function ComponentPreview() {
    return (
        <div>
            <div className="widgetContianer">
                <Button
                    primary={true}
                    look="default"
                    disabled={false}>
                    MyButton
              </Button>
            </div>
            <div className="widgetContianer">
                <Calendar />
            </div>
            <div className="widgetContianer">
                <Chart>
                    <ChartTitle text="Units sold" />
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={categories} title={{ text: 'Months' }} />
                    </ChartCategoryAxis>
                    <ChartSeries>
                        <ChartSeriesItem type="area" data={firstSeries} />
                        <ChartSeriesItem type="area" data={secondSeries} />
                        <ChartSeriesItem type="area" data={thirdSeries} />
                    </ChartSeries>
                </Chart>
            </div>
        </div>
    );
}

