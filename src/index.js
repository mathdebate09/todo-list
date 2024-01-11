import './styles.css';
import './modules/icon.js';
import './modules/skeleton.js';
import todoLogic from './modules/logic.js';
import displayController from './modules/domValues.js';

todoLogic.loopTasks();
todoLogic.loopProjects();

displayController.addTaskTrigger();
displayController.addProjectTrigger();
displayController.setToolSelector();

const inboxButton = document.querySelector('.inbox');
inboxButton.id = "selected-tool";