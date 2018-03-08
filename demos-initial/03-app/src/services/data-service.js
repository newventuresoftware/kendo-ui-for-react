import { getDurationString, getDuration } from '../utils/duration';
import projects from '../data/projects';
import tasks from '../data/tasks';

let nextProjectId = Math.max(...projects.map(p => p.id)) + 1;
let nextTaskId = Math.max(...tasks.map(t => t.id)) + 1;

function generateNextTaskId() {
    return nextTaskId++;
}

function generateNextProjectId() {
    return nextProjectId++;
}

function getListOfTasks() {

    let listOfTasks = tasks.map(task => {
        let project = projects.find(p => p.id === task.projectId);

        return {
            id: task.id,
            title: task.title,
            projectName: project ? project.name : "",
            durationString: getDurationString(task.startTime, task.endTime),
            duration: getDuration(task.startTime, task.endTime),
            color: project ? project.color : "#fff",
            startTime: task.startTime.getTime()
        }
    });

    debugger;

    return listOfTasks;
}

function createTask() {
    return {
        id: generateNextTaskId(),
        title: "",
        startTime: null,
        endTime: null
    }
}

function removeTask(taskId) {
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex <= -1) {
        return;
    }

    tasks.splice(taskIndex, 1);
}

function addTask(task) {
    tasks.push(task);
}

export default {
    projects: projects,
    tasks: tasks,
    getListOfTasks: getListOfTasks,
    removeTask: removeTask,
    createTask: createTask,
    addTask: addTask
};

