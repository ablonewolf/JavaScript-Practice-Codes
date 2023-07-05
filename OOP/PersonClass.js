class Person {
  constructor(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }

  set gender(gender) {
    this._gender = gender;
  }

  get gender() {
    return this._gender;
  }

  calcAge() {
    let currentDate = new Date();
    let birthDate = new Date(this.birthDate);
    return currentDate.getFullYear() - birthDate.getFullYear();
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  printInfo() {
    console.log(
      `Name of the person: ${this.firstName} ${
        this.lastName
      }; age is: ${this.calcAge()}, sex is: ${this.gender}.`
    );
  }

  static greetings() {
    console.log(`Greetings!!`);
  }
}

const arka = new Person('Arka', 'Bhuiyan', '1997-09-01');
arka.gender = 'male';
Person.greetings();
arka.printInfo();
console.log(`Arka's Full name is: ${arka.fullName}`);

// class declarations are never hoisted
// classes are also first class citizens as under the hood, they are functions
// classes are executed in strict mode
