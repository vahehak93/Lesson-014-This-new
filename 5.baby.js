function Person (name, age) {
    this.name = name;
}

function Baby(name, age, favoriteToy) {
    Person.call(this, name, age);
    this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype)
Baby.prototype.play = function () {
return `Playing with ${this.favoriteToy}`;
}

const baby1 = new Baby("John", 1, "Dog");

console.log(baby1.play())
