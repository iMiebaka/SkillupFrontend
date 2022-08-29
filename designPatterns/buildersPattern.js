// We declare our objects
const bug1 = {
    name: "Buggy McFly",
    phrase: "Your debugger doesn't work with me!"
}

function addFlyingAbility (obj) {
    obj.fly = () => console.log(`Now ${obj.name} can fly!`)
    obj.fly2 = () => console.log(`Now ${obj.name} can fly again!`)
}
addFlyingAbility(bug1)
bug1.fly() // output: "Now Buggy McFly can fly!"
bug1.fly2() // output: "Now Buggy McFly can fly again!"
console.log(bug1);