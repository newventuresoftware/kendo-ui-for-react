import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

const people = [{ "id": 1, "first_name": "Creighton", "last_name": "Macci", "email": "cmacci0@spiegel.de", "gender": "Male", "country": "Bulgaria" },
{ "id": 2, "first_name": "Lorne", "last_name": "Bamsey", "email": "lbamsey1@zimbio.com", "gender": "Male", "country": "Indonesia" },
{ "id": 3, "first_name": "Aubree", "last_name": "O'Dea", "email": "aodea2@yolasite.com", "gender": "Female", "country": "Germany" },
{ "id": 4, "first_name": "Zebulon", "last_name": "Obispo", "email": "zobispo3@privacy.gov.au", "gender": "Male", "country": "USA" }
];

export default class UseExport extends React.Component {

    pdfExportComponent;
    rootDiv;

    render() {
        return (
            <div ref={rootDiv => this.rootDiv = rootDiv}>
                <div class="example-config">
                    <button className="k-button" onClick={this.exportPDFWithComponent}>Export with component</button>
                    &nbsp;
                    <button className="k-button" onClick={this.exportPDFWithMethod}>Export with method</button>
                </div>
                <PDFExport ref={(component) => this.pdfExportComponent = component} paperSize="A4">
                    <Grid
                        style={{ maxHeight: '400px' }}
                        data={people}>
                        <Column field="first_name" title="First Name" />
                        <Column field="last_name" title="Last Name" />
                    </Grid>
                </PDFExport>
            </div>
        );
    }

    exportPDFWithMethod = () => {
        savePDF(ReactDOM.findDOMNode(this.rootDiv), { paperSize: 'A4' });
    }
    exportPDFWithComponent = () => {
        this.pdfExportComponent.save();
    }
}