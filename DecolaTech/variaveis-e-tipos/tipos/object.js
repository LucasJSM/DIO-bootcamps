let person = {
  // chave: valor
  firstName: "John",
  lastName: "Doe",
  age: 20,
};

console.log(person);
console.log(person.firstName);

person.age = 31;
console.log(person);

console.log(Object.values(person));
console.log(Object.keys(person));

person.adress = "Rua Leão";
console.log(person);

person["numberOfSiblings"] = 3;
console.log(person);

let mom = "nameOfMom";
person[mom] = "Joana";
console.log(person.nameOfMom);