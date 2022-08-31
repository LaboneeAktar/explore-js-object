// 1. Create object using object literals
const player = {};
player.name = 'Small Nirob';
player.speciality = 'Batsman';
player.bat = function () {
    console.log('Swing Your Bat');
}
// console.log(player);
// player.bat();


//
const student = {
    name: 'Panday',
    job: 'Khay andey',
    ball: function () {
        console.log('Throw the Ball');
    },
    salary: 100000
}
// console.log(student);


//2. Object constructor
const person = new Object();
// console.log(person);

// 3. Object create method
const item = Object.create(null);
// console.log(item);

//
const atel = Object.create(student);
// console.log(atel.name);

//4. Class
class Person {
    name = 'Abul';
    address = 'Sodor Ghat';
    constructor(age) {
        this.age = age;
    }
}
const person1 = new Person(56);
// console.log(person1);


//5. Function

function Car(model, price) {
    this.model = model;
    this.price = price;
}
const tesla = new Car('Elon', 43);
console.log(tesla);