function Calculator () {

    this.add = function (a, b) {
        this.a = a;
        this.b = b;
        return this.a + this.b
    };
    this.subtract = function (a, b) {
        this.a = a;
        this.b = b;
        return this.a - this.b
    };
    this.multiply = function (a, b) {
        this.a = a;
        this.b = b;
        return this.a * this.b
    };
    this.divide = function (a, b) {
        this.a = a;
        this.b = b;
        return this.a / this.b
    };
};

const calculator = new Calculator();

console.log(calculator.add(10,5)); 
console.log(calculator.subtract(10,5)); 
console.log(calculator.multiply(10,5));
console.log(calculator.divide(10,5));

