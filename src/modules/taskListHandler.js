import { format, parse } from 'date-fns';

function Task(title, date, projectGroup) {
    this.title = title;
    if (date === "") {
        // Set the date to today's date
        this.date = format(new Date(), 'dd/MM/yyyy');
    } else {
        // Parse the date string into a Date object and format it
        this.date = format(parse(date, 'dd/MM/yyyy', new Date()), 'dd/MM/yyyy');
    }
    this.isComplete = false;
    this.projectGroup = projectGroup;

    this.getTitle = function () {
        return this.title;
    }

    this.getDate = function () {
        return this.date;
    }

    this.setDate = function (newDate) {
        this.date = format(parse(newDate, 'dd/MM/yyyy', new Date()), 'dd/MM/yyyy');
    }

    this.getIsComplete = function () {
        return this.isComplete;
    }

    this.setIsComplete = function (newIsComplete) {
        this.isComplete = newIsComplete;
    }

    this.getProjectGroup = function () {
        return this.projectGroup;
    }

    this.setProjectGroup = function (newProjectGroup) {
        this.projectGroup = newProjectGroup;
    }
}

export default Task;