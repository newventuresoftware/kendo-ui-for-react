import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Hello from './views/Hello';
import DomUpdates from './views/DomUpdates';
import Lifecycle from './views/Lifecycle';
import Components from './views/Components';
import Header from './Header';

class App extends Component {

  state = {
    currentTab: "home"
  }

  render() {
    return (
      <div className="App">
        <Header onNavigation={this.onNavigation} />
        <div className="tabContent">
          <Switch>
            <Route path="/hello" component={Hello} />
            <Route path="/components" component={Components} />
            <Route path="/domupdates" component={DomUpdates} />
            <Route path="/lifecycle" component={Lifecycle} />
          </Switch>
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
