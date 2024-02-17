// string slicing = creating a substring 
//                            from a portion of another string
//                            string.slice(start, end)

// ------------ EXAMPLE 1 ------------
const fullName = "Savio Feng";

let firstName = fullName.slice(0, 5);
let lastName = fullName.slice(6, 10);

console.log(firstName);
console.log(lastName);

// ------------ EXAMPLE 2 ------------

const email = "SavioFeng@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);

