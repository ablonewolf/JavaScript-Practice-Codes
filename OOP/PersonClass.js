class Person {
  constructor(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }
  calcAge() {
    let currentDate = new Date();
    let birthDate = new Date(this.birthDate);
    return currentDate.getFullYear() - birthDate.getFullYear();
  }
  printInfo() {
    console.log(
      `Name of the person: ${this.firstName} ${
        this.lastName
      }; age is: ${this.calcAge()}.`
    );
  }
}

const arka = new Person('Arka', 'Bhuiyan', '1997-09-01');
arka.printInfo();

// class declarations are never hoisted
// classes are also first class citizens as under the hood, they are functions
// classes are executed in strict mode
