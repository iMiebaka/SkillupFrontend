// Working with chain function
const Food = function () {
  this.addCheese = function (val) {
    this.cheese = val;
    return this;
  };
  this.addMustard = function (val) {
    this.mustard = val;
    return this;
  };
};

const food = new Food();

const d = food.addCheese(true).addMustard(true);
console.log(d);


// A much heavy approach
let Request = function (amount) {
  this.amount = amount;
  console.log("Requested: $" + amount + "\n");

  this.get = function (bill) {
    let count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log("Dispense " + count + " $" + bill + " bills");
    return this;
  };
};

let request = new Request(378);
request.get(100).get(50).get(20).get(10).get(5).get(1);
