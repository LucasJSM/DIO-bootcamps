let users = ["Maria", "José", "Clark", "Jonas"];
users.push("Marcus");
console.log(users);

const lastName = users.pop();
console.log(lastName);

const firstName = users.shift();
console.log(users);

const usersLength = users.length
console.log(usersLength);

users.unshift(firstName);
console.log(users);

users.push(lastName);
console.log(users);

const partOfUsers = users.slice(1, 3);
console.log(partOfUsers);

// Métodos que executam funções
// users.forEach();
// users.map();
// users.flat();
// users.flatMap();
// users.filter();
// users.reduce();

const partOfDeletedUsers = users.splice(0, 1);
console.log(partOfDeletedUsers);

console.log(users.includes("João"));

const everyName = users.every(user => user === "Clark");
console.log(everyName);

const someName = users.some(user => user === "Marcus");
console.log(someName);

const reverseUsers = users.reverse();
console.log(reverseUsers);