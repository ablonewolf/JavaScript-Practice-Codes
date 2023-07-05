const Person = function (firstName, lastName, birthDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthDate = birthDate;
};

Person.prototype.gender = 'NotSet';

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.calcAge = function () {
  currentDate = new Date();
  birthDate = new Date(this.birthDate);
  return currentDate.getFullYear() - birthDate.getFullYear();
};

Person.prototype.printInfo = function () {
  console.log(
    `Name of the person: ${this.firstName} ${
      this.lastName
    }; age is: ${this.calcAge()}, with the sex of ${this.gender}.`
  );
};

const Student = function (firstName, lastName, birthDate, course) {
  Person.call(this, firstName, lastName, birthDate);
  this.course = course;
};

// linking the students prototype with the prototype property of Person
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hi! I am ${this.fullName()}. My major is ${this.course}.`);
};

const arka = new Person('Arka', 'Bhuiyan', '1997-09-01');
arka.gender = 'male';

arka.printInfo();

const arghya = new Student('Arghya', 'Bhuiyan', '1998-11-28', 'Economics');
arghya.gender = 'male';

arghya.introduce();
arghya.printInfo();
