import React, { Component } from 'react';
import logo from './logo.svg';
import kendoLogo from './kendoka.png';
import ComponentPreview from './ComponentPreview';
import './App.css';
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
        <div>
          <div className="tabContent">
            <ComponentPreview />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
