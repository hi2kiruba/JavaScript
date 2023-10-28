//ES6 (EcmaScript 2015) Javascript introduced class keyword
//Class is a blue print for creating object with shared properties and methods
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	
	sayHello() {
		console.log(`Hello, my name is ${this.name}`);
	}
}

class Student extends Person{
	constructor(name, age, grade) {
		super(name, age);
		this.grade = grade;
	}
	
	sayHello() {
		console.log(`Hello, my name is ${this.name}, age is ${this.age} and grade is ${this.grade}`);
	} 
}


//Create objects from class
const ps1 = new Person("John", "29");
const ps2 = new Person("Alex", "33");
ps1.sayHello();
ps2.sayHello();

const stud = new Student("Terry", "14", 8);
stud.sayHello();