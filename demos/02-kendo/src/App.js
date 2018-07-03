import React, { Component } from 'react';
import logo from './logo.svg';
import kendoLogo from './kendoka.png';
import './App.css';
import Home from './views/Home';

class App extends Component {

  state = {
    currentTab: "home"
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logos">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={kendoLogo} className="Kendo-logo" alt="Kendo logo" />
          </div>
          <h1 className="App-title">Welcome to Kendo UI for React</h1>
          <nav>
            <ul className="navMain">
              <li><a className="navLink" href="#" onClick={() => this.onNavigation("home")}>Home</a></li>
            </ul>
          </nav>
        </header>
        <div className="tabContent">
          {this.state.currentTab === "home" && <Home />}
        </div>
      </div>
    );
  }

  onNavigation(linkName) {
    this.setState({
      currentTab: linkName
    })
  }
}

export default App;
