// Array Loop
const numbers = [23, 44, 556, 775, 33, 55];
for (const number of numbers) {
    // console.log(number);
}

// Loop in object

const bottle = { color: 'Yellow', price: 150, isCleaned: true, capacity: 1 };

// using for of loop
const keys = Object.keys(bottle);
for (const key of keys) {
    // console.log(key, bottle[key]);
}

// using for in loop
for (const key in bottle) {
    // console.log(key, bottle[key]);
}

//advanced
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}