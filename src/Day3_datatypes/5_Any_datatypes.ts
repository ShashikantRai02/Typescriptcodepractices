// Any type
// loses typescript benefits[means type safety]

let value: any = "Welcome";
console.log(typeof value); //output- string
value = 200;
console.log(typeof value);
value = true;
console.log(typeof value);
console.log("Value:", value);
/* 
string
number
boolean
Value: true
*/
