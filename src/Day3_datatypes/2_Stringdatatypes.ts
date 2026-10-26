// string type 
// Represents textual data 
/* 
1. singlequotes('')
2. doublequote("")
3. Bactick(``)

*/
let firstname:string="Shashikant"
let lastname:string="Rai"
// hello Shashikant Rai
// let greeting:string="Hello",firstname,lastname
console.log("hello",firstname,lastname)
let greeting:string =`Hello ${firstname} ${lastname}`
console.log(greeting)