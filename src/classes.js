class Person {
	constructor(name) {
		this.name = name
	}
}

var bob = new Person('Bob')
console.log(bob.name)

class Student extends Person {
	constructor(name) {
		super(name)
		this.title = 'student'
	}
}

var james = new Student('James')

console.log(`${james.name} is a ${james.title}`)
