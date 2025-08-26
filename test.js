var Person = /** @class */ (function () {
    function Person(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    return Person;
}());
var person1 = new Person("Lionel", "Messi");
var person2 = new Person("Ra", "mas");
console.log(person1.name);
console.log(person1.lastname);
console.log("------------------");
console.log(person2.name);
console.log(person2.lastname);
