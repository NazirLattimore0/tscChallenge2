class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getNameAndAddress(separator: string): string {
    try {
      if (!separator) {
        throw new Error("separator is required");
      }
      return this.name + separator + this.address;
    } catch (error) {
      console.error(error);
      return "Error: separator is required";
    }
  }
}

let person = new Person("Nazir", 19, "Charlotte");
console.log(person.getNameAndAddress(", "));
