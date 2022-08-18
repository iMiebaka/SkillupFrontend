function Click() {
  this.handlers = []; // observers
}

Click.prototype = {
  subscribe: function (fn) {
    this.handlers.push(fn);
  },

  unsubscribe: function (fn) {
    this.handlers = this.handlers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
  },

  fire: function (o, thisObj) {
    let scope = thisObj || window;
    this.handlers.forEach(function (item) {
      item.call(scope, o);
    });
  },
};

let clickHandler = function (item) {
  console.log("fired: " + item);
};

let click = new Click();

click.subscribe(clickHandler);
click.fire("event #1");
click.unsubscribe(clickHandler);
click.fire("event #2");
click.subscribe(clickHandler);
click.fire("event #3");
