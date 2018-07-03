import React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import products from './products.json';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { DateInput } from '@progress/kendo-react-dateinputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';

export default class App extends React.Component {
    render() {

        let dropDownOptions = {
            width: 500,
            data: products,
            valueField: "ProductID",
            textField: "ProductName"
        }

        return (
            <div>
                <div>
                    <NumericTextBox name="controlled" defaultValue={1} width="300" />
                </div>
                <div>
                    <DateInput value={new Date()} />
                </div>
                <div>
                    <DropDownList {...dropDownOptions} />
                </div>s
                <div>
                    <Button >Simple button</Button>
                    <Button primary={true} onClick={(e) => { alert("button clicked") }}>Simple button</Button>
                </div>
            </div>
        );
    }
}