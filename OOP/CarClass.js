class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  set speed(speed) {
    this._speed = speed;
  }

  get speed() {
    return this._speed;
  }

  accelerate() {
    this.speed += 5;
  }

  brake() {
    this.speed -= 5;
  }

  printInfo() {
    console.log(
      `This is the car of the brand ${this.brand} and of the color ${this.color}. Currently it has a speed of ${this.speed} km/h.`
    );
  }
}
const BMW = new Car('BMW', 'black');
const Ford = new Car('Ford', 'blue');
BMW.speed = 60;
BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.printInfo();

Ford.speed = 50;
Ford.brake();
Ford.brake();
Ford.accelerate();
Ford.printInfo();
