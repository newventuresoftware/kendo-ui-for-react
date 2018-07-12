import React, { Component } from 'react';
import logo from './logo.svg';
import kendoLogo from './kendo-react-logo.svg';
import ComponentPreview from './ComponentPreview';
import './App.css';
import './kendo.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div className="Header-top">
                <img src={kendoLogo} className="Kendo-logo" alt="Kendo Logo" />
                <img src={logo} className="App-logo" alt="logo" />
                <span className="App-title">Custom Themes</span>
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
