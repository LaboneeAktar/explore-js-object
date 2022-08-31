const bottle = { color: 'Yellow', price: 150, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle);
// console.log(keys);                //show Only key name : [ 'color', 'price', 'isCleaned', 'capacity' ]

const values = Object.values(bottle);
// console.log(values);          // show only vlaue: [ 'Yellow', 150, true, 1 ]

const pair = Object.entries(bottle);
// console.log(pair);

// const twoDimensionArray = [['color', 'Yellow'], ['price', 150], ['isCleaned', true], ['capacity', 1]]

// console.log(bottle);
// delete bottle.isCleaned;          // delete single item
// console.log(bottle);

// Object.seal(bottle);
Object.freeze(bottle);    // if object is freeze it can't be able to delete, add and modify
delete bottle.isCleaned;       // can't delete because it's seal
bottle.height = 12;            // can't add item
bottle.price = 1000;           // but it can modify
console.log(bottle);
