'use stric'

const myName = 'John';
let myAge = 39;

let me = {
    name: 'John',
    age: 39,
};

let guest = me;

guest.age = 123;

console.log(me.age);