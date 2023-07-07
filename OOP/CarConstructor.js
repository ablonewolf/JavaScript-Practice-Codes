const Car = function (brand, color, speed) {
    this.brand = brand;
    this.color = color;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 5;
};

Car.prototype.brake = function () {
    this.speed -= 5;
};

Car.prototype.printInfo = function () {
    console.log(
        `This is the car of the brand ${this.brand} and of the color ${this.color}. Currently it has a speed of ${this.speed} km/h.`
    );
};

const BMW = new Car('BMW', 'black', 60);
const Ford = new Car('Ford', 'blue', 50);

BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.printInfo();

Ford.brake();
Ford.brake();
Ford.accelerate();
Ford.printInfo();
