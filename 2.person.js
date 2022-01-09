function Person (name, age){
    this.name = name;
    this.age = age;
  }
  
Person.prototype.compareAge = function(person){
console.log("person", person);
console.log("this", this);

if(person.age > this.age){
    return `${person.name} is older than me.`
} else if(person.age < this.age){
    return `${person.name} is younger than me.`
} else {
    return `${person.name} is the same age as me.`
}

}

const p1 = new Person("Samvel", 24);
const p2 = new Person("Karen", 36);
const p3 = new Person("Astxik", 24);



console.log(p2.compareAge(p3));