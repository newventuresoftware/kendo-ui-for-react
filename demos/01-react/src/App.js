import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import Lifecycle from './views/Lifecycle';

class App extends Component {

  state = {
    currentTab: "home"
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <nav>
            <ul className="navMain">
              <li><a className="navLink" href="#" onClick={() => this.onNavigation("home")}>Home</a></li>
              <li><a className="navLink" href="#" onClick={() => this.onNavigation("lifecycle")}>Lifecyle</a></li>
            </ul>
          </nav>
        </header>
        <div className="tabContent">
          {this.state.currentTab === "home" && <Home />}
          {this.state.currentTab === "lifecycle" && <Lifecycle />}
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
