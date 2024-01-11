import Task from './taskListHandler.js';
import displayController from './domValues.js';
import { compareAsc, isToday, startOfDay } from 'date-fns';
import { startOfWeek, endOfWeek, isWithinInterval } from 'date-fns';

const todoLogic = (function () {
    let taskList = [];

    const addTask = function (title, date, project) {
        const newTask = new Task(title, date, project);
        taskList.push(newTask);
        taskList.sort((a, b) => compareAsc(new Date(a.getDate()), new Date(b.getDate())));
        console.log(taskList);
    };

    const deleteTask = function (index) {
        taskList.splice(index, 1);
    };

    const getTaskTitle = function (index) {
        return taskList[index].getTitle;
    };

    const getTaskDate = function (index) {
        return taskList[index].getDate;
    };

    const setTaskDate = function (newDate, index) {
        taskList[index].setDate(newDate);
    };

    const getIsTaskComplete = function (index) {
        return taskList[index].getIsComplete();
    };

    const setIsTaskComplete = function (isComplete, index) {
        taskList[index].setIsComplete(isComplete);
    };

    const getTaskProjectGroup = function (index) {
        return taskList[index].getProjectGroup();
    };

    const setTaskProjectGroup = function (newProjectGroup, index) {
        taskList[index].setProjectGroup(newProjectGroup);
    };

    const currentIndex = function () {
        return (taskList.length() - 1);
    };

    function isThisWeek(date) {
        const now = new Date();
        const start = startOfWeek(now, { weekStartsOn: 1 }); // week starts on Monday
        const end = endOfWeek(now, { weekStartsOn: 1 }); // week ends on Sunday

        return isWithinInterval(date, { start, end });
    }

    const loopTasks = function () {
        const pendingTaskDiv = document.querySelector('.pending-task');
        pendingTaskDiv.innerHTML = '';
        const completedTaskDiv = document.querySelector('.completed-task');
        completedTaskDiv.innerHTML = '';

        taskList.forEach(function (task, index) {

            const taskDateString = task.getDate();
            const [day, month, year] = taskDateString.split("/");
            const taskDate = startOfDay(new Date(`${month}/${day}/${year}`));

            if (getCurrentFilter() === "inbox") {
                if (task.getIsComplete()) {
                    displayController.displayCompletedTasks(task, index);
                } else {
                    displayController.displayPendingTasks(task, index);
                }
            } else if (currentFilter === "today") {
                if (isToday(taskDate)) {
                    if (task.getIsComplete()) {
                        displayController.displayCompletedTasks(task, index);
                    } else {
                        displayController.displayPendingTasks(task, index);
                    }
                }
            } else if (currentFilter === "this-week") {
                if (isThisWeek(taskDate)) {
                    if (task.getIsComplete()) {
                        displayController.displayCompletedTasks(task, index);
                    } else {
                        displayController.displayPendingTasks(task, index);
                    }
                }
            } else if (getCurrentFilter() === "project") {
                if (task.getProjectGroup() === currentProject) {
                    if (task.getIsComplete()) {
                        displayController.displayCompletedTasks(task, index);
                    } else {
                        displayController.displayPendingTasks(task, index);
                    }
                }
            }
        });
    };

    const projectsList = [];

    let currentProject = "default";
    let currentFilter = "inbox";

    const setCurrentFilter = function (thisFilter) {
        currentFilter = thisFilter;
    }

    const getCurrentFilter = function () {
        return currentFilter;
    }

    const addNewProject = function (newProject) {
        projectsList.push(newProject);
    };

    const deleteProject = function (index) {
        projectsList.splice(index, 1);
    };

    const setCurrentProject = function (thisProject) {
        currentProject = thisProject;
    }

    const getCurrentProject = function () {
        return currentProject;
    }

    const loopProjects = function () {
        const projectListDiv = document.querySelector('.project-list');
        projectListDiv.innerHTML = '';

        projectsList.forEach(function (projectTitle, index) {
            displayController.displayProjects(projectTitle, index);
        });
    };

    return {
        addTask, deleteTask, getTaskTitle,
        getTaskDate, setTaskDate, getIsTaskComplete,
        setIsTaskComplete, getTaskProjectGroup, setTaskProjectGroup,
        currentIndex, loopTasks, addNewProject, loopProjects, deleteProject,
        setCurrentProject, getCurrentProject, setCurrentFilter, getCurrentFilter
    };
})();

export default todoLogic;