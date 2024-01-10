import Task from './taskListHandler.js';
import displayController from './domValues.js';
import deletePath from './assets/delete.svg';

const todoLogic = (function () {
    let taskList = [];

    const addTask = function (title, date, project) {
        const newTask = new Task(title, date, project);
        taskList.push(newTask);
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

    const loopTasks = function () {
        const pendingTaskDiv = document.querySelector('.pending-task');
        pendingTaskDiv.innerHTML = '';
        const completedTaskDiv = document.querySelector('.completed-task');
        completedTaskDiv.innerHTML = '';

        taskList.forEach(function (task, index) {
            if (task.getIsComplete()) {
                displayController.displayCompletedTasks(task);
            } else {
                displayController.displayPendingTasks(task);
            }

            const lastPendingTaskDiv = pendingTaskDiv.lastChild;
            // Add click event listener to the task div
            lastPendingTaskDiv.addEventListener('click', function (event) {
                // Check if the clicked element is the delete button
                if (event.target.classList.contains('task-delete-button')) {
                    deleteTask(index);
                    loopTasks();
                }
            });
        });
    };


    const projectsList = [];

    const addNewProject = function (newProject) {
        projectsList.push(newProject);
    };

    const deleteProject = function (index) {
        projectsList.splice(index, 1);
    };

    const loopProjects = function () {
        const projectListDiv = document.querySelector('.project-list');
        projectListDiv.innerHTML = '';

        projectsList.forEach(function (projectTitle, index) {
            displayController.displayProjects(projectTitle);

            // Add click event listener to the newly added project div
            const projectDiv = projectListDiv.lastChild;

            projectDiv.addEventListener('click', function (event) {
                // Check if the clicked element is the close button
                if (event.target.classList.contains('close-button')) {
                    deleteProject(index);
                    loopProjects();
                }
            });
        });
    };

    return {
        addTask, deleteTask, getTaskTitle,
        getTaskDate, setTaskDate, getIsTaskComplete,
        setIsTaskComplete, getTaskProjectGroup, setTaskProjectGroup,
        currentIndex, loopTasks, addNewProject, loopProjects, deleteProject
    };
})();

export default todoLogic;