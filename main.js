var noGrades = document.querySelector("p");

var tableElement = document.getElementsByClassName("table");
var gradeTable = new GradeTable(tableElement, noGrades);

var headerElement = document.querySelector("header");
var pageHeader = new PageHeader(headerElement);

var formElement = document.querySelector("form");
var gradeForm = new GradeForm(formElement);

var app = new App(gradeTable, pageHeader, gradeForm);

app.start(this.gradeTable.onDeleteClick(this.deleteGrade));
