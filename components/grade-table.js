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

      tableRow.append(name, course, grade);

      this.tableElement.append(tableRow);
    }
  }
}
