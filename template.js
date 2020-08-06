const firstName = "Farhad";
const lastName = "Hossain";
//In general way 
const fullName = firstName + " " + lastName;
console.log(fullName);

//ES6 way using carrot

const fullName2 = `${firstName} ${lastName} using carrot sign`;
console.log(fullName2);


//multiline print 
//In general way
const multiline = `I started to learn web development.
Now I am learning template
I use carrot here`;

console.log(multiline);

const name = "Farhad Hossain";
const greeting = `Hello ${name} `
console.log(greeting);