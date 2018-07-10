import React, { Component } from 'react';
import './App.css';
import '@progress/kendo-theme-default/dist/all.css';
import NavigationPane from './components/NavigationPane';
import dataService from './services/data-service';
import TrackView from './views/track';
import DashboardView from './views/dashboard';
import HomeView from './views/home';
import { Route, NavLink } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentTask: dataService.createTask(),
      tasks: dataService.getListOfTasks()
    }
  }

  render() {
    return (
      <div className="App">

        <NavigationPane>
          <ul>
            <li><NavLink exact to="/" className="navLink home">Home</NavLink></li>
            <li><NavLink to="/track" className="navLink track">Track</NavLink></li>
            <li><NavLink to="/dashboard" className="navLink dashboard">Dashboard</NavLink></li>
          </ul>
        </NavigationPane>

        <div className="contentPane">
          <Route exact path="/" component={HomeView} />
          <Route path="/track" render={() => (
            <TrackView projects={dataService.projects}
              tasks={dataService.getListOfTasks()}
              currentTask={this.state.currentTask}
              startTask={e => this.handleStartTask(e)}
              updateTask={e => this.handleUpdateTask(e)}
              stopTask={e => this.handleStopTask(e)}
              deleteTask={e => this.handleDeleteTask(e)} />
          )} />
          <Route path="/dashboard" render={() => (
            <DashboardView tasks={dataService.getListOfTasks()} />
          )} />
        </div>
      </div>
    );
  }

  handleUpdateTask = (taskProps) => {
    var updatedTask = {
      ...this.state.currentTask,
      ...taskProps
    }

    this.setState({
      currentTask: updatedTask
    })
  }

  handleStartTask = (taskProps) => {
    var task = this.state.currentTask;
    task.startTime = new Date();

    this.setState({
      currentTask: task
    })
  }

  handleDeleteTask = (task) => {
    dataService.removeTask(task.id);

    this.setState({
      tasks: dataService.getListOfTasks()
    })
  }

  handleStopTask = () => {
    var task = this.state.currentTask;
    task.endTime = new Date();
    dataService.addTask(task);

    this.setState({
      currentTask: dataService.createTask()
    })
  }
}

export default App;