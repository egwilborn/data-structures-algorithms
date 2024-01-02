class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  // instance method
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "You are expelled!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times. `;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }

  //class method! general utility method, doesn't require data from the instance
  //marked by static keyword
  static enrollStudents() {
    return "ENROLLING STUDENTS!";
  }
}

let firstStudent = new Student("Emily", "Wilborn", 1);
let secondStudent = new Student("Connor", "Reilly", 2);
console.log(firstStudent);
// firstStudent.markLate();
firstStudent.addScore(87);
firstStudent.addScore(78);
firstStudent.addScore(80);
console.log(firstStudent);
console.log(firstStudent.calculateAverage());

console.log(Student.enrollStudents());
