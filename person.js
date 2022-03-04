function Person() {
  this.firstName = "";
  this.lastName = "";
  this.age = 0;
  this.height = "";
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

var person1 = new Person();
person1.firstName = "V";
person1.lastName = "Giribabu";
person1.age = "23";
person1.height = "6";

alert(person1.getFullName());
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.height);

var person2 = new Person();
person2.firstName = "S";
person2.lastName = "Gautham";
person2.age = "29";
person2.height = "6";
alert(person2.getFullName());
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.height);
