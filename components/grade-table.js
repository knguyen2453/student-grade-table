class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    if (grades === " ") {
      var pElement = document.querySelector("p");
      pElement.removeClass();
        } else {
      this.tableElement = document.querySelector("tbody");
        for (var i = 0; i < grades.length; i++) {
      var studentGrades = grades[i];

      const tableRow = this.renderGradeRow(studentGrades, this.deleteGrade);

      this.tableElement.append(tableRow);
      }
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(studentGrades, deleteGrade) {
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
    deleteButton.addEventListener("click", function() {
      this.deleteGrade(studentGrades.id);
    });

    newOperations.append(deleteButton);

    newTableRow.append(newName, newCourse, newGrade, newOperations);

    return newTableRow;
  }
};
