"use strict";
(self["webpackChunkPixelDo"] = self["webpackChunkPixelDo"] || []).push([["skeleton"],{

/***/ "./src/modules/skeleton.js":
/*!*********************************!*\
  !*** ./src/modules/skeleton.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/modules/assets/logo.svg");
/* harmony import */ var _assets_home_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/home.svg */ "./src/modules/assets/home.svg");
/* harmony import */ var _assets_inbox_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/inbox.svg */ "./src/modules/assets/inbox.svg");
/* harmony import */ var _assets_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/plus.svg */ "./src/modules/assets/plus.svg");
/* harmony import */ var _assets_project_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/project.svg */ "./src/modules/assets/project.svg");
/* harmony import */ var _assets_today_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/today.svg */ "./src/modules/assets/today.svg");
/* harmony import */ var _assets_week_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/week.svg */ "./src/modules/assets/week.svg");
/* harmony import */ var _assets_close_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/close.svg */ "./src/modules/assets/close.svg");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/delete.svg */ "./src/modules/assets/delete.svg");










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
    <img class="logo-img" src="${_assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__}">
    <p class="logo-text">PixelDo</p>`;
container.appendChild(headerDiv);

const displayDiv = document.createElement('div');
displayDiv.classList.add('display');

const toolsDiv = document.createElement('div');
toolsDiv.classList.add('tools');

const todosDiv = document.createElement('div');
todosDiv.classList.add('todos');
todosDiv.innerHTML = `
    <button class="inbox"><img src="${_assets_inbox_svg__WEBPACK_IMPORTED_MODULE_2__}">Tasks</button>
    <button class="today"><img src="${_assets_today_svg__WEBPACK_IMPORTED_MODULE_5__}">Today</button>
    <button class="this-week"><img src="${_assets_week_svg__WEBPACK_IMPORTED_MODULE_6__}">This Week</button>`;
toolsDiv.appendChild(todosDiv);

const projectsDiv = document.createElement('div');
projectsDiv.classList.add('projects');
projectsDiv.innerHTML = `
    <p class="project-title">Projects</p>
    <div class="project-list">
    </div>
    <div class="project-div">
        <button class="add-project"><img src="${_assets_plus_svg__WEBPACK_IMPORTED_MODULE_3__}">Add Project</button>
    </div>`;
toolsDiv.appendChild(projectsDiv);

displayDiv.appendChild(toolsDiv);

const actionDisplayDiv = document.createElement('div');
actionDisplayDiv.classList.add('action-display');
actionDisplayDiv.innerHTML = `
    <p class="action-header"><img src="${_assets_home_svg__WEBPACK_IMPORTED_MODULE_1__}">Tasks</p>
    <div class="task-div">
        <button class="add-task"><img src="${_assets_plus_svg__WEBPACK_IMPORTED_MODULE_3__}">Add Task</button>
    </div>
    <div class="pending-task">
    </div>
    <div class="completed-task">
    </div>`;
displayDiv.appendChild(actionDisplayDiv);

container.appendChild(displayDiv);

const createFooter = document.createElement('div');
createFooter.classList.add('footer');
createFooter.innerHTML = '<p>© Jay Singh <a href="https://github.com/mathdebate09/todo-list" target="_blank">(mathdebate09)</a></p>'
container.appendChild(createFooter);

/***/ }),

/***/ "./src/modules/assets/close.svg":
/*!**************************************!*\
  !*** ./src/modules/assets/close.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b3455d717d5c885f9af.svg";

/***/ }),

/***/ "./src/modules/assets/delete.svg":
/*!***************************************!*\
  !*** ./src/modules/assets/delete.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de0bb67a90c508546224.svg";

/***/ }),

/***/ "./src/modules/assets/home.svg":
/*!*************************************!*\
  !*** ./src/modules/assets/home.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e995b1fa6c9a2c09ac7.svg";

/***/ }),

/***/ "./src/modules/assets/inbox.svg":
/*!**************************************!*\
  !*** ./src/modules/assets/inbox.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7bfe24cb79b940a7ffdd.svg";

/***/ }),

/***/ "./src/modules/assets/logo.svg":
/*!*************************************!*\
  !*** ./src/modules/assets/logo.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e37669910fcfbfea7639.svg";

/***/ }),

/***/ "./src/modules/assets/plus.svg":
/*!*************************************!*\
  !*** ./src/modules/assets/plus.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "469e7f772cffd2e91e89.svg";

/***/ }),

/***/ "./src/modules/assets/project.svg":
/*!****************************************!*\
  !*** ./src/modules/assets/project.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d754c3f3a97840d5c9e.svg";

/***/ }),

/***/ "./src/modules/assets/today.svg":
/*!**************************************!*\
  !*** ./src/modules/assets/today.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "233385e32206cd372d69.svg";

/***/ }),

/***/ "./src/modules/assets/week.svg":
/*!*************************************!*\
  !*** ./src/modules/assets/week.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "518ff47ec29e1552eabd.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/skeleton.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDQTtBQUNFO0FBQ0Y7QUFDTTtBQUNKO0FBQ0Y7QUFDRTtBQUNFOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDZDQUFRLENBQUM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDhDQUFTLENBQUM7QUFDaEQsc0NBQXNDLDhDQUFTLENBQUM7QUFDaEQsMENBQTBDLDZDQUFRLENBQUM7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsNkNBQVEsQ0FBQztBQUN6RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyw2Q0FBUSxDQUFDO0FBQ2xEO0FBQ0EsNkNBQTZDLDZDQUFRLENBQUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUGl4ZWxEby8uL3NyYy9tb2R1bGVzL3NrZWxldG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2dvUGF0aCBmcm9tICcuL2Fzc2V0cy9sb2dvLnN2Zyc7XG5pbXBvcnQgaG9tZVBhdGggZnJvbSAnLi9hc3NldHMvaG9tZS5zdmcnO1xuaW1wb3J0IGluYm94UGF0aCBmcm9tICcuL2Fzc2V0cy9pbmJveC5zdmcnO1xuaW1wb3J0IHBsdXNQYXRoIGZyb20gJy4vYXNzZXRzL3BsdXMuc3ZnJztcbmltcG9ydCBwcm9qZWN0UGF0aCBmcm9tICcuL2Fzc2V0cy9wcm9qZWN0LnN2Zyc7XG5pbXBvcnQgdG9kYXlQYXRoIGZyb20gJy4vYXNzZXRzL3RvZGF5LnN2Zyc7XG5pbXBvcnQgd2Vla1BhdGggZnJvbSAnLi9hc3NldHMvd2Vlay5zdmcnO1xuaW1wb3J0IGNsb3NlUGF0aCBmcm9tICcuL2Fzc2V0cy9jbG9zZS5zdmcnO1xuaW1wb3J0IGRlbGV0ZVBhdGggZnJvbSAnLi9hc3NldHMvZGVsZXRlLnN2Zyc7XG5cbi8qIENyZWF0ZXNcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImxvZ28taW1nXCIgc3JjPVwiXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImxvZ28tdGV4dFwiPlBpeGVsRG88L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG9zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbmJveFwiPjxpbWcgc3JjPVwiXCI+IFRhc2tzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0b2RheVwiPjxpbWcgc3JjPVwiXCI+IFRvZGF5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0aGlzLXdlZWtcIj48aW1nIHNyYz1cIlwiPiBUaGlzIFdlZWs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+UHJvamVjdHM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtcHJvamVjdFwiPjxpbWcgc3JjPVwiXCI+IEFkZCBQcm9qZWN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWN0aW9uLWhlYWRlclwiPjxpbWcgc3JjPVwiXCI+VGFza3M8L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC10YXNrXCI+PGltZyBzcmM9XCJcIj5BZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZW5kaW5nLXRhc2tcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGxldGVkLXRhc2tcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi9cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG5jb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbmhlYWRlckRpdi5pbm5lckhUTUwgPSBgXG4gICAgPGltZyBjbGFzcz1cImxvZ28taW1nXCIgc3JjPVwiJHtsb2dvUGF0aH1cIj5cbiAgICA8cCBjbGFzcz1cImxvZ28tdGV4dFwiPlBpeGVsRG88L3A+YDtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuXG5jb25zdCBkaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kaXNwbGF5RGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcblxuY29uc3QgdG9vbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRvb2xzRGl2LmNsYXNzTGlzdC5hZGQoJ3Rvb2xzJyk7XG5cbmNvbnN0IHRvZG9zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50b2Rvc0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvcycpO1xudG9kb3NEaXYuaW5uZXJIVE1MID0gYFxuICAgIDxidXR0b24gY2xhc3M9XCJpbmJveFwiPjxpbWcgc3JjPVwiJHtpbmJveFBhdGh9XCI+VGFza3M8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwidG9kYXlcIj48aW1nIHNyYz1cIiR7dG9kYXlQYXRofVwiPlRvZGF5PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInRoaXMtd2Vla1wiPjxpbWcgc3JjPVwiJHt3ZWVrUGF0aH1cIj5UaGlzIFdlZWs8L2J1dHRvbj5gO1xudG9vbHNEaXYuYXBwZW5kQ2hpbGQodG9kb3NEaXYpO1xuXG5jb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcbnByb2plY3RzRGl2LmlubmVySFRNTCA9IGBcbiAgICA8cCBjbGFzcz1cInByb2plY3QtdGl0bGVcIj5Qcm9qZWN0czwvcD5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1saXN0XCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGl2XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtcHJvamVjdFwiPjxpbWcgc3JjPVwiJHtwbHVzUGF0aH1cIj5BZGQgUHJvamVjdDwvYnV0dG9uPlxuICAgIDwvZGl2PmA7XG50b29sc0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpdik7XG5cbmRpc3BsYXlEaXYuYXBwZW5kQ2hpbGQodG9vbHNEaXYpO1xuXG5jb25zdCBhY3Rpb25EaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5hY3Rpb25EaXNwbGF5RGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGlvbi1kaXNwbGF5Jyk7XG5hY3Rpb25EaXNwbGF5RGl2LmlubmVySFRNTCA9IGBcbiAgICA8cCBjbGFzcz1cImFjdGlvbi1oZWFkZXJcIj48aW1nIHNyYz1cIiR7aG9tZVBhdGh9XCI+VGFza3M8L3A+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stZGl2XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdGFza1wiPjxpbWcgc3JjPVwiJHtwbHVzUGF0aH1cIj5BZGQgVGFzazwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwZW5kaW5nLXRhc2tcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29tcGxldGVkLXRhc2tcIj5cbiAgICA8L2Rpdj5gO1xuZGlzcGxheURpdi5hcHBlbmRDaGlsZChhY3Rpb25EaXNwbGF5RGl2KTtcblxuY29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlEaXYpO1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNyZWF0ZUZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbmNyZWF0ZUZvb3Rlci5pbm5lckhUTUwgPSAnPHA+wqkgSmF5IFNpbmdoIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWF0aGRlYmF0ZTA5L3RvZG8tbGlzdFwiIHRhcmdldD1cIl9ibGFua1wiPihtYXRoZGViYXRlMDkpPC9hPjwvcD4nXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=