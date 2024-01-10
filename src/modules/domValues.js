import todoLogic from './logic.js';
import plusPath from './assets/plus.svg';
import Task from './taskListHandler.js';
import deletePath from './assets/delete.svg';
import closePath from './assets/close.svg';
import projectPath from './assets/project.svg';

const displayController = (function () {
    const addTaskDisplay = function () {
        const taskDiv = document.querySelector('.task-div');
        taskDiv.innerHTML = `
        <form id="task-form">
            <div class="task-input-div">
                <input type="text" id="task-title-input" placeholder="Title">
                <input type="text" id="task-date-input" placeholder="dd/mm/yyyy">
            </div>
            <div class="task-button-div">
                <button type="submit" id="task-submit">Add Task</button>
                <button id="task-cancel">Cancel</button>
            </div>
        </form>`;

        const taskForm = document.querySelector('.task-div form');

        taskForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let returnDate;
            const getCurrentProject = "default";

            const taskTitle = document.querySelector('#task-title-input');
            const taskDate = document.querySelector('#task-date-input');

            returnDate = taskDate.value ? taskDate.value : '';

            todoLogic.addTask(taskTitle.value, returnDate, getCurrentProject);

            taskTitle.value = '';
            taskDate.value = '';
            reloadAddTaskButton();
            todoLogic.loopTasks();
        });

        const cancelButton = document.querySelector('#task-cancel');
        cancelButton.addEventListener('click', function (event) {
            event.preventDefault();

            // Clear the form inputs
            const taskTitle = document.querySelector('#task-title-input');
            const taskDate = document.querySelector('#task-date-input');
            taskTitle.value = '';
            taskDate.value = '';

            reloadAddTaskButton();
        });
    }

    const addTaskTrigger = function () {
        const addTaskButton = document.querySelector('.add-task');
        addTaskButton.addEventListener('click', addTaskDisplay);
    }

    const reloadAddTaskButton = function () {
        const taskDiv = document.querySelector('.task-div');
        taskDiv.innerHTML = `<button class="add-task"><img src="${plusPath}">Add Task</button>`;
        addTaskTrigger();
    }

    const displayPendingTasks = function (task) {
        const returnTitle = task.getTitle();
        const returnDate = task.getDate();

        const pendingTaskDiv = document.querySelector('.pending-task');

        const pendingItemDiv = document.createElement('div');
        pendingItemDiv.classList.add('pending-item');
        pendingItemDiv.innerHTML = `<div class="pending-toggler"><div></div></div><p>${returnTitle}</p><img class="task-delete-button" src="${deletePath}">`;

        pendingTaskDiv.appendChild(pendingItemDiv);
    }

    const displayCompletedTasks = function (task) {
        const returnTitle = task.getTitle();
        const returnDate = task.getDate();

        const completedTaskDiv = document.querySelector('.completed-task');

        const completedItemDiv = document.createElement('div');
        completedItemDiv.classList.add('completed-item');
        completedItemDiv.innerHTML = `<div class="completed-toggler"><div></div></div><p>${returnTitle}</p><img class="task-delete-button" src="${deletePath}">`;

        completedTaskDiv.appendChild(completedItemDiv);
    }

    // Projects
    const addProjectDisplay = function () {
        const ProjectDiv = document.querySelector('.project-div');
        ProjectDiv.innerHTML = `
        <form id="project-form">
            <input type="text" id="project-title-input" placeholder="Title">
            <div class="project-button-div">
                <button type="submit" id="project-submit">Add Project</button>
                <button id="project-cancel">Cancel</button>
            </div>
        </form>`;

        const projectForm = document.querySelector('#project-form');
        projectForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const projectTitle = document.querySelector('#project-title-input');

            todoLogic.addNewProject(projectTitle.value);

            projectTitle.value = '';
            reloadAddProjectButton();
            todoLogic.loopProjects();
        });

        const ProjectCancelButton = document.querySelector('#project-cancel');
        ProjectCancelButton.addEventListener('click', function (event) {
            event.preventDefault();

            // Clear the form inputs
            const projectTitle = document.querySelector('#project-title-input');
            projectTitle.value = '';

            reloadAddProjectButton();
        });
    }

    const addProjectTrigger = function () {
        const addProjectButton = document.querySelector('.add-project');
        addProjectButton.addEventListener('click', addProjectDisplay);
    }

    const reloadAddProjectButton = function () {
        const projectDiv = document.querySelector('.project-div');
        projectDiv.innerHTML = `<button class="add-project"><img src="${plusPath}">Add Project</button>`;
        addProjectTrigger();
    }

    const displayProjects = function (projectTitle) {
        const projectListDIv = document.querySelector('.project-list');

        const newProjectItem = document.createElement('div');
        newProjectItem.classList.add('project-item');
        newProjectItem.innerHTML = `<img class="project-logo" src="${projectPath}"><p>${projectTitle}</p><img class="close-button" src="${closePath}">`;

        projectListDIv.appendChild(newProjectItem);
    }

    return { addTaskDisplay, addTaskTrigger, displayPendingTasks, displayCompletedTasks,
            addProjectDisplay, addProjectTrigger, displayProjects };
})();

export default displayController;