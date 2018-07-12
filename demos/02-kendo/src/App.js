import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import UseComponent from './views/UseComponent';
import UseWrapper from './views/UseWrapper';
import Home from './views/Home';
import Header from './Header';
import UseKendo from './views/UseKendo';
import UseCharts from './views/UseCharts';
import UseExport from './views/UseExport';
import NewComponents from './views/NewComponents';
import '@progress/kendo-theme-default/dist/all.css';
import '@progress/kendo-ui';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header onNavigation={this.onNavigation} />
        <div className="tabContent">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/component" component={UseComponent} />
            <Route path="/wrapper" component={UseWrapper} />
            <Route path="/kendo" component={UseKendo} />
            <Route path="/charts" component={UseCharts} />
            <Route path="/export" component={UseExport} />
            <Route path="/newcomponents" component={NewComponents} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
