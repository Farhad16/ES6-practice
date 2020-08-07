const person = {
    name: "Farhad",
    age: 26,
    address: "Jessore",
    phone: "01758416616",
    friends: ['Parvez', 'junaid',
        'sadatt', 'Roman'
    ]
}

const {
    name,
    phone,
    friends
} = person;

const friend = person.friends
console.log(name, phone, ...friend);
console.log(...friend);