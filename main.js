$.ajax({
  type: "GET",
  url: "https://sgt.lfzprototypes.com/api/grades",
  header: {
    "X-Access-Token": TQ9HeX2,
  }
  success: showUserData,
  error: function () {
    console.log("Error")
  }
})

function showUserData(data) {
  var tBody = document.getElementById("user-data");
  for (i = 0; i < data.length; i++) {
    var tRow = document.createElement("tr");
    var name = document.createElement("td");
    name.textContent = data[i].name;
    var course = document.createElement("td");
    course.textContent = data[i].course;
    var grade = document.createElement("td");
    grade.textContent = data[i].grade;
    tRow.append(name, course, grade);
    tBody.append(tRow);
  }
}
