class Person {
    public name: string;
    public lastname: string;
    
    constructor(name: string, lastname: string) {
    this.name = name;
    this.lastname = lastname;

    }
    
    
}

const person1 = new Person("Lionel", "Messi");
const person2 = new Person("Ra", "mas")

console.log(person1.name);
console.log(person1.lastname);
console.log("------------------");
console.log(person2.name);
console.log(person2.lastname);
