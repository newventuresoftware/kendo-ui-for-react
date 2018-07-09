import React, { Component } from 'react';
import logo from './logo.svg';
import kendoLogo from './kendoka.png';
import './App.css';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import UseComponent from './views/UseComponent';
import UseWrapper from './views/UseWrapper';
import Home from './views/Home';
import UseKendo from './views/UseKendo';
import UseCharts from './views/UseCharts';
import UseExport from './views/UseExport';
import '@progress/kendo-theme-default/dist/all.css';
import '@progress/kendo-ui';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Kendo UI for React</h1>
          <div className="logos">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={kendoLogo} className="Kendo-logo" alt="Kendo logo" />
          </div>
        </header>
        <nav>
          <ul className="navMain">
            <NavLink exact to='/' className="navLink" activeClassName='current'>Home</NavLink>
            <NavLink to='/component' className="navLink" activeClassName='current'>Component</NavLink>
            <NavLink to='/wrapper' className="navLink" activeClassName='current'>Wrapper</NavLink>
            <NavLink to='/kendo' className="navLink" activeClassName='current'>Using Kendo</NavLink>
            <NavLink to='/charts' className="navLink" activeClassName='current'>Charts</NavLink>
            <NavLink to='/export' className="navLink" activeClassName='current'>Export</NavLink>
          </ul>
        </nav>
        <div className="tabContent">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/component" component={UseComponent} />
            <Route path="/wrapper" component={UseWrapper} />
            <Route path="/kendo" component={UseKendo} />
            <Route path="/charts" component={UseCharts} />
            <Route path="/export" component={UseExport} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
