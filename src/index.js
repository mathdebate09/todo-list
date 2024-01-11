import './styles.css';
import './modules/icon.js';
import './modules/skeleton.js';
import todoLogic from './modules/logic.js';
import displayController from './modules/domValues.js';

document.addEventListener('DOMContentLoaded', function () {
    todoLogic.loadDataFromLocalStorage();
    todoLogic.loopProjects();
    todoLogic.loopTasks();
});

displayController.addTaskTrigger();
displayController.addProjectTrigger();
displayController.setToolSelector();

const inboxButton = document.querySelector('.inbox');
inboxButton.id = "selected-tool";