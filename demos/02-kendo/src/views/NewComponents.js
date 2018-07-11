import React from 'react';
import { DatePicker, TimePicker } from '@progress/kendo-react-dateinputs';
import { AutoComplete, ComboBox } from '@progress/kendo-react-dropdowns';
import { Switch } from '@progress/kendo-react-inputs';

const countries = ["Austria", "Bulgaria", "Germany", "Greece", "Hungary", "United Kingdom", "Vatican City", "USA"];

export default class NewComponents extends React.Component {

    state = {
        date: new Date(),
        time: new Date()
    }

    render() {
        return (
            <div className="offsetWidgets">
                <DatePicker
                    value={this.state.date}
                    onChange={this.handleDateChange} />
                <TimePicker
                    value={this.state.time}
                    onChange={this.handleDataChange} />
                <AutoComplete data={countries} placeholder="e.g. Denmark" />
                <ComboBox data={countries} />
                <Switch />
            </div>
        );
    }

    handleDateChange = (e) => {
        this.setState({
            date: e.value
        })
    }

    handleTimeChange = (e) => {
        this.setState({
            time: e.value
        })
    }
}