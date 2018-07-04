import React, { Component } from 'react';
import logo from './logo.svg';
import kendoLogo from './kendoka.png';
import './App.css';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import UseComponent from './views/UseComponent';
import Home from './views/Home';
import '@progress/kendo-theme-default/dist/all.css';

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
          </ul>
        </nav>
        <div className="tabContent">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/component" component={UseComponent} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
