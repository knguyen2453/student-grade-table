class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.onSubmit = this.handleSubmit;
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);

    var name = FormData.get("name");
    var course = FormData.get("course");
    var grade = FormData.get("grade");

    this.createGrade(name, course, grade);

    event.target.reset();

    console.log("hi");
  }
}
