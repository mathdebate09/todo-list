import logoPath from './assets/logo.svg';
import homePath from './assets/home.svg';
import inboxPath from './assets/inbox.svg';
import plusPath from './assets/plus.svg';
import projectPath from './assets/project.svg';
import todayPath from './assets/today.svg';
import weekPath from './assets/week.svg';
import closePath from './assets/close.svg';

/* Creates
        <div class="header">
            <img class="logo-img" src="">
            <p class="logo-text">PixelDo</p>
        </div>
        <div class="display">
            <div class="tools">
                <div class="todos">
                    <button class="inbox"><img src=""> Tasks</button>
                    <button class="today"><img src=""> Today</button>
                    <button class="this-week"><img src=""> This Week</button>
                </div>
                <div class="projects">
                    <p class="project-title">Projects</p>
                    <button class="add-project"><img src=""> Add Project</button>
                </div>
            </div>
            <div class="action-display">
                <p class="action-header"><img src="">Tasks</p>
                <button class="add-task"><img src="">Add Task</button>
                <div class="pending-task"></div>
                <div class="completed-task"></div>
            </div>
        </div> */

const container = document.querySelector('.container');

const headerDiv = document.createElement('div');
headerDiv.classList.add('header');
headerDiv.innerHTML = `
    <img class="logo-img" src="${logoPath}">
    <p class="logo-text">PixelDo</p>`;
container.appendChild(headerDiv);

const displayDiv = document.createElement('div');
displayDiv.classList.add('display');

const toolsDiv = document.createElement('div');
toolsDiv.classList.add('tools');

const todosDiv = document.createElement('div');
todosDiv.classList.add('todos');
todosDiv.innerHTML = `
    <button class="inbox"><img src="${inboxPath}">Tasks</button>
    <button class="today"><img src="${todayPath}">Today</button>
    <button class="this-week"><img src="${weekPath}">This Week</button>`;
toolsDiv.appendChild(todosDiv);

const projectsDiv = document.createElement('div');
projectsDiv.classList.add('projects');
projectsDiv.innerHTML = `
    <p class="project-title">Projects</p>
    <div class="project-list">
        <div class="project-content"><img class="project-logo" src="${projectPath}"><p>Default</p><img class="close-button" src="${closePath}"></div>
    </div>
    <button class="add-project"><img src="${plusPath}">Add Project</button>`;
toolsDiv.appendChild(projectsDiv);

displayDiv.appendChild(toolsDiv);

const actionDisplayDiv = document.createElement('div');
actionDisplayDiv.classList.add('action-display');
actionDisplayDiv.innerHTML = `
    <p class="action-header"><img src="${homePath}">Tasks</p>
    <button class="add-task"><img src="${plusPath}">Add Task</button>
    <div class="pending-task"></div>
    <div class="completed-task"></div>`;
displayDiv.appendChild(actionDisplayDiv);

container.appendChild(displayDiv);

const createFooter = document.createElement('div');
createFooter.classList.add('footer');
createFooter.innerHTML = '<p>© Jay Singh <a href="https://github.com/mathdebate09/todo-list" target="_blank">(mathdebate09)</a></p>'
container.appendChild(createFooter);