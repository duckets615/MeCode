function Person(name,gender,age,job) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.job = job;
    this.friends = [];
}

// constructor with object argument
function PersonTwo(obj) {
    this.name = obj.name;
    this.gender = obj.gender;
    this.age = obj.age;
    this.job = obj.job;
    this.friends = [];
}
/// instantiate
const sarah = {
    name: 'Sarah',
    gender: 'Female',
    age: 31,
    job: 'Doctor',
    friends: ['Chris', 'Tom', 'Jamie', 'Ashley']
}

// const tim = new Person('Tim', 'Male', 20, 'student');
// const sara = new PersonTwo(sarah);
// console.log(tim.friends)
// console.log(sara);