class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    this.tableElement = document.querySelector("tbody");
    for (var i = 0; i < grades.length; i++) {
      var studentGrades = grades[i];

      var tableRow = document.createElement("tr");

      var name = document.createElement("td");
      name.textContent = studentGrades.name;

      var course = document.createElement("td");
      course.textContent = studentGrades.course;

      var grade = document.createElement("td");
      grade.textContent = studentGrades.grade;

      var operations = document.createElement("td");

      tableRow.append(name, course, grade, operations);

      this.tableElement.append(tableRow);
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(grades, deleteGrade) {
    for(var i = 0; i < grades.length; i++) {
      var studentGrades = grades[i];

      var newTableRow = document.createElement("tr");

      var newName = document.createElement("td");
      newName.textContent = studentGrades.name;

      var newCourse = document.createElement("td");
      newCourse.textContent = studentGrades.course;

      var newGrade = document.createElement("td");
      newGrade.textContent = studentGrades.grade;

      var newOperations = document.createElement("td");

      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = "DELETE";
      deleteButton.style.class = "btn btn-danger";
      deleteButton.addEventListener("click", function() {
        deleteGrade(grades.id);
      });

      newOperations.append(deleteButton);

      newTableRow.append(newName, newCourse, newGrade, newOperations);

      this.tableElement.append(tableRow);
    }
  }
};
