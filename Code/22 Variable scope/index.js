// arithmetic operators = operands (values, variables, etc.)
//                                         operators (+ - * /)
//                                         ex. 11 = x + 5;


/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/

let students = 30;
// varie operazioni aritmetiche
students = students + 1; 
students = students - 1;
students = students * 2;
students = students / 2;
students = students ** 2; //esponenziale con doppio asterisco
console.log(`The students value is: ${students}`);


let extraStudents = (students +1) % 3; //resto 1, calcolo la divisione e vedo il resto

students += 1;
console.log(`The students value is: ${students}`);
students -= 1;
console.log(`The students value is: ${students}`);
students *= 2;
console.log(`The students value is: ${students}`);
students /= 2;
console.log(`The students value is: ${students}`);
students **= 2;
console.log(`The students value is: ${students}`); 
students %= 2; //azzera il tutto, se students valeva 810000, dopo questa operazione vale 0, perché 810000 diviso 2 dà resto 0. Se invece students valeva 810001, dopo l'operazione vale 1.
console.log(`The students value is: ${students}`);

students++;
console.log(`The students value is: ${students}`);
students--;
console.log(`The students value is: ${students}`);

console.log(`The extraStudents value is: ${extraStudents}`);
