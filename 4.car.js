function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = this.odometer; 
};

Car.prototype.fill = function (gallons) {
    this.tank = this.tank + gallons;
}

Car.prototype.drive = function (distance) {
    const driveCar = this.tank + this.milesPerGallon;
    if (distance <= driveCar) {
        this.odometer = this.odometer + distance;
        this.tank = this.tank - (distance/this.milesPerGallon);
    } else {
        this.odometer = this.odometer + driveCar;
        this.tank = 0;
        return `I ran out of fuel at ${this.odometer} miles!`
    }
}       

const car1 = new Car("BMW", 10);
car1.fill(100)
console.log(car1.drive(200)) 