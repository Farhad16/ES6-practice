class Father {
    constructor(name) {
        this.fatherName = name || 'John';
    }
}

class Child extends Father {
    constructor(name) {
        super();
        this.name = name;
    }

    getName() {
        return `${this.name} ${this.fatherName} it works`
    }
}
const father = new Father('Rock');
const child1 = new Child('sina');

console.log(child1)
console.log(father)
console.log(child1.getName());