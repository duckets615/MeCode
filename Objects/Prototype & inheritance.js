function Person(obj) {
    this.name = obj.name;
    this.gender = obj.gender;
    this.age = obj.age;
    this.job = obj.job;
    this.friends = [];
}


Person.prototype.speak = function() {
    return `Hello, my name is ${this.name}. I am ${this.age} years old and work as a ${this.job}`
}

function Baby(obj) {
    Person.call(this,obj);  // inherit from Person
    this.mom = obj.mom;
    this.dad = obj.dad;
    this.toy = obj.toy;
}
Baby.prototype = Object.create(Person.prototype) // inherit Person prototype;

const em = {
    name: 'Emmy',
    gender: 'Female',
    age: 0.5,
    job: 'unemployed',
    mom: 'Ashley',
    dad: 'Sean',
    toy: 'rattle'
}
const sarah = {
    name: 'Sarah',
    gender: 'Female',
    age: 31,
    job: 'Doctor',
}

// const sara = new Person(sarah)
// const emmy = new Baby(em);
// console.log(emmy)
// console.log(emmy.speak())

