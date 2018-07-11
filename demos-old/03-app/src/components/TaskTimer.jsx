import React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { ColorPicker } from '@progress/kendo-inputs-react-wrapper';
import TaskList from './TaskList';
import { getDurationString } from '../utils/duration';

const defaultItem = { name: 'Select project ...', id: -1 };

export default class TaskTimer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            timerText: "00:00:00"
        }
    }

    componentDidMount() {
        if (this.hasRunningTask()) {
            this.startTimer();
        }
        else {
            this.stopTimer();
        }
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.hasRunningTask()) {
            this.startTimer();
        }
        else {
            this.stopTimer();
        }
    }

    hasRunningTask() {
        return this.props.currentTask != null && this.props.currentTask.startTime;
    }

    getTaskProject() {
        return this.props.projects.find(p => p.id === this.props.currentTask.projectId) || null;
    }

    render() {

        const isRunning = this.hasRunningTask();
        const project = this.getTaskProject();
        const dropDownStyle = {
            width:'200px'
        };

        return (
            <div className="taskTimer">
                <input className="taskNameInput" name="taskNameInput" placeholder="What are you working on?"
                    value={this.props.currentTask.title}
                    onChange={e => { this.onTitleChange(e) }} />
                <DropDownList data={this.props.projects}
                    defaultItem={defaultItem}
                    value={project}
                    onChange={e => { this.onProjectIdChange(e) }}
                    style={dropDownStyle}
                    textField="name" valueField="id" />

                {isRunning
                    ? <Button className="timerButton stop" icon="stop" look="bare" onClick={(e) => this.onStopClick(e)}></Button>
                    : <Button className="timerButton play" icon="play" look="bare" onClick={(e) => this.onStartClick(e)}></Button>
                }

                <span className="timer">{this.state.timerText}</span>
            </div>
        );
    }

    onProjectIdChange = (e) => {
        this.props.updateTask({
            projectId: e.target.value
        });
    }

    onTitleChange = (e) => {
        this.props.updateTask({
            title: e.target.value
        });
    }

    onStartClick = (e) => {
        this.props.startTask();
    }

    onStopClick = (e) => {
        this.props.stopTask();
    }

    startTimer = (e) => {
        if (this.intervalHandle) {
            return;
        }

        var that = this;
        this.intervalHandle = setInterval(() => {
            var task = that.props.currentTask;
            var duration = getDurationString(task.startTime, new Date());

            that.setState({
                timerText: duration,
            });
        }, 1000)
    }

    stopTimer = (e) => {

        if (!this.intervalHandle) {
            return;
        }

        clearInterval(this.intervalHandle);
        this.intervalHandle = null;

        this.setState({
            timerText: "00:00:00"
        });
    }
}