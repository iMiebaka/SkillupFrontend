// We declare our prototype object with two methods
const enemy = {
  attack: function () {
    console.log("Pim Pam Pum!");
  },
  flyAway: function () {
    console.log("Flyyyy like an eagle!");
  },
  age: 12
};

const bug1 = {
  name: "Buggy McFly",
  phrase: "Your debugger doesn't work with me!",
};

console.log(bug1);
Object.setPrototypeOf(bug1, enemy);
console.log(bug1);
