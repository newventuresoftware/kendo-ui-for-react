import React, { Component } from 'react';
import TaskTimer from '../components/TaskTimer';
import TaskList from '../components/TaskList';

class TrackView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="appView">
                <TaskTimer 
                    projects={this.props.projects} 
                    currentTask={this.props.currentTask}
                    startTask={this.props.startTask} 
                    updateTask={this.props.updateTask} 
                    stopTask={this.props.stopTask} />
                <TaskList tasks={this.props.tasks} deleteTask={this.props.deleteTask} />
            </div>
        );
    }
}

export default TrackView;