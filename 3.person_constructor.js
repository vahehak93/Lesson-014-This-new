function Person (name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
    
    this.eat = function (food) {
        this.food = food;
        if (this.stomach.length < 9) {
            this.stomach.push(food);
            return this.stomach
        } else {
            return this.stomach
        }
        
    };
    this.poop = function () {
       this.stomach = []
       return this.stomach
    }
    this.toString = function() {
        return (`${this.name}, ${this.age}`)
    }
};

const person1 = new Person("Vahe", 29)
console.log(person1.eat("a"))
console.log(person1.eat("b"))
console.log(person1.toString())
console.log(person1.poop())

