var Iterator = function (items) {
  this.index = 0;
  this.items = items;

  this.first = function () {
    this.reset();
    return this.next();
  }
  this.next = function () {
    return this.items[this.index++];
  }
  this.hasNext = function () {
    return this.index <= this.items.length;
  }
  this.reset = function () {
    this.index = 0;
  }
  this.each = function (callback) {
    for (var item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  }
};

var items = ["one", 2, "circle", true, "Applepie"];
var iter = new Iterator(items);

// using for loop

for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
  console.log(item);
}
console.log("");

// using Iterator's each method

iter.each(function (item) {
  console.log(item);
});
