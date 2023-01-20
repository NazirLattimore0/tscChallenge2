var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.getNameAndAddress = function (separator) {
        try {
            if (!separator) {
                throw new Error("separator is required");
            }
            return this.name + separator + this.address;
        }
        catch (error) {
            console.error(error);
            return "Error: separator is required";
        }
    };
    return Person;
}());
var person = new Person("Nazir", 19, "Charlotte");
console.log(person.getNameAndAddress(", "));
