const Person = function (firstName, lastName, birthDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthDate = birthDate;
};

Person.prototype.gender = 'NotSet';

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

const arka = new Person('Arka', 'Bhuiyan', '1997-09-01');
arka.gender = 'male';

arka.printInfo();
