class Car {
  constructor() {
    this.name = "Car";
    this.wheels = 4;
  }
  turnOn = () => console.log("Chacabúm!!");
}

const vehicleFactory = {
  createVehicle: function () {
    return new Car();
  },
};
const car = vehicleFactory.createVehicle();
console.log(car);
