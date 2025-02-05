class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() { // This is automatically added to Person.prototype
        console.log(`Hello, my name is ${this.name}`);
    }
}

let person1 = new Person("Alice");
let person2 = new Person("Bob");

console.log(person1.sayHello());
console.log(person2.sayHello());
console.log(person1.sayHello === person2.sayHello); // Output: true
