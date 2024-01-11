import todoLogic from './logic.js';
import plusPath from './assets/plus.svg';
import Task from './taskListHandler.js';
import deletePath from './assets/delete.svg';
import closePath from './assets/close.svg';
import projectPath from './assets/project.svg';

const displayController = (function () {

    // Tasks DOM
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
            let returnDate = '';

            const taskTitle = document.querySelector('#task-title-input');
            const taskDate = document.querySelector('#task-date-input');

            // If taskTitle is empty, return from the function
            if (!taskTitle.value.trim()) {
                const titleInput = document.querySelector('#task-title-input');
                titleInput.classList.add('error-title-input');
                return;
            }

            // Check if either an empty/formatted entry or else wont submit
            const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
            if (taskDate.value && !datePattern.test(taskDate.value)) {
                const dateInput = document.querySelector('#task-date-input');
                dateInput.classList.add('error-date-input');
                return;
            }

            returnDate = taskDate.value;

            todoLogic.addTask(taskTitle.value, returnDate, todoLogic.getCurrentProject());

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

    const displayPendingTasks = function (task, index) {
        const returnTitle = task.getTitle();
        const returnDate = task.getDate();

        const pendingTaskDiv = document.querySelector('.pending-task');

        const pendingItemDiv = document.createElement('div');
        pendingItemDiv.classList.add('pending-item');
        pendingItemDiv.innerHTML = `<div class="pending-toggler"><div></div></div><p>${returnTitle}</p><p>${returnDate}</p><img class="task-delete-button" src="${deletePath}">`;

        pendingItemDiv.addEventListener('click', function () {
            task.setIsComplete(true);
            todoLogic.loopTasks();
        });

        pendingTaskDiv.appendChild(pendingItemDiv);

        // Add delete event listener to the newly added task div
        pendingItemDiv.addEventListener('click', function (event) {
            if (event.target.classList.contains('task-delete-button')) {
                todoLogic.deleteTask(index);
                todoLogic.loopTasks();
            }
        });
    }

    const displayCompletedTasks = function (task, index) {
        const returnTitle = task.getTitle();
        const returnDate = task.getDate();

        const completedTaskDiv = document.querySelector('.completed-task');

        const completedItemDiv = document.createElement('div');
        completedItemDiv.classList.add('completed-item');
        completedItemDiv.innerHTML = `<div class="completed-toggler"><div></div></div><p>${returnTitle}</p><p>${returnDate}</p><img class="task-delete-button" src="${deletePath}">`;

        completedItemDiv.addEventListener('click', function () {
            task.setIsComplete(false);
            todoLogic.loopTasks();  // Update the task display
        });

        completedTaskDiv.appendChild(completedItemDiv);

        // Add delete event listener to the newly added task div
        completedItemDiv.addEventListener('click', function (event) {
            if (event.target.classList.contains('task-delete-button')) {
                todoLogic.deleteTask(index);
                todoLogic.loopTasks();
            }
        });
    }

    // Projects DOM
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

            // If projectTitle is empty, return from the function
            if (!projectTitle.value.trim()) {
                const titleInput = document.querySelector('#project-title-input');
                titleInput.classList.add('error-title-input');
                return;
            }

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

    const displayProjects = function (projectTitle, index) {
        const projectListDiv = document.querySelector('.project-list');

        const newProjectItem = document.createElement('div');
        newProjectItem.classList.add('project-item');
        newProjectItem.innerHTML = `<img class="project-logo" src="${projectPath}"><p>${projectTitle}</p><img class="close-button" src="${closePath}">`;

        projectListDiv.appendChild(newProjectItem);

        // Add close event listener to the newly added task div
        newProjectItem.addEventListener('click', function (event) {
            if (event.target.classList.contains('close-button')) {
                todoLogic.deleteProject(index);
                todoLogic.loopProjects();
            }
            removeSelectedId();

            // Add the id to the clicked project
            newProjectItem.id = "selected-tool";
            todoLogic.setCurrentProject(projectTitle);
            todoLogic.setCurrentFilter("project");
            todoLogic.loopTasks();
        });
    }

    const removeSelectedId = function () {
        const allProjects = document.querySelectorAll('.project-item');
        allProjects.forEach(function (project) {
            project.id = '';
        });

        const allTodos = document.querySelectorAll('.inbox, .today, .this-week');
        allTodos.forEach(function (todo) {
            todo.id = '';
        });
    }

    const setToolSelector = function () {
        const inboxButton = document.querySelector('.inbox');
        inboxButton.addEventListener('click', () => {
            todoLogic.setCurrentProject("default");
            removeSelectedId();
            todoLogic.setCurrentFilter("inbox");
            inboxButton.id = "selected-tool";
            todoLogic.loopTasks();
        });

        const todayButton = document.querySelector('.today');
        todayButton.addEventListener('click', () => {
            todoLogic.setCurrentProject("default");
            removeSelectedId();
            todoLogic.setCurrentFilter("today");
            todayButton.id = "selected-tool";
            todoLogic.loopTasks();
        });

        const thisWeekButton = document.querySelector('.this-week');
        thisWeekButton.addEventListener('click', () => {
            todoLogic.setCurrentProject("default");
            removeSelectedId();
            todoLogic.setCurrentFilter("this-week");
            thisWeekButton.id = "selected-tool";
            todoLogic.loopTasks();
        });
    }

    return {
        addTaskDisplay, addTaskTrigger, displayPendingTasks, displayCompletedTasks,
        addProjectDisplay, addProjectTrigger, displayProjects,
        setToolSelector
    };
})();

export default displayController;