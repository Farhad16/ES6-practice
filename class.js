class Student {
    constructor(roll, name) {
        this.roll = roll;
        this.name = name;
        this.school = 'Abdul Bari';
        this.passing_year = "2012";
    }
}

const farhad = new Student();
farhad.roll = 2;
farhad.name = "Farhad";
const toufiq = new Student();
toufiq.roll = 3;
toufiq.name = "Toufiq";

console.log(farhad);
console.log(toufiq);