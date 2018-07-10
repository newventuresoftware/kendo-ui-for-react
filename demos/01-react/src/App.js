import React, { Component } from 'react';
import './App.css';
import Hello from './views/Hello';
import Lifecycle from './views/Lifecycle';
import Header from './Header';

class App extends Component {

  state = {
    currentTab: "home"
  }

  render() {
    return (
      <div className="App">
        <Header onNavigation={this.onNavigation}/>
        <div className="tabContent">
          {this.state.currentTab === "hello" && <Hello />}
          {this.state.currentTab === "lifecycle" && <Lifecycle />}
        </div>
      </div>
    );
  }

  onNavigation = (linkName) => {
    this.setState({
      currentTab: linkName
    })
  }
}

export default App;
