// type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)

let age = window.prompt("how old are you?");
age = Number(age); //converto da stringa a number, cosi posso fare il +1 
age+=1; 
console.log(`Your age is: ${age}`); 

//test di cosa succede dopo il casting
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); //non riuscirà a visualizzare il valore di x darà NaN
console.log(y, typeof y); // valore pizza e tipo di dato string
console.log(z, typeof z); //true


x = 0; //riassegno un valore number
console.log(x, typeof x); //ora visualizza la x