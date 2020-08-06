const hubby = "Elish kanhcon";
console.log(hubby);

//const use in array
const number = [12, 13];
number[0] = 10;
number.push(15)
console.log(number);
console.log(number[0]);

// Const use in object

const person = {
    name: "Farhad",
    age: 26,
    phone: 416616
};

person.age = 25;

console.log(person.name, person.age);

// let in loop and example of scope level variable

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum += i
}

console.log(sum);