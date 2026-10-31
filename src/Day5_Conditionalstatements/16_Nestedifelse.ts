// Nested If else
/* 
if(condition1){
statements

}
else if(condition2){


}
else if (condition3){
statements


}
else{
    
    statements
    }


*/
// example- Depending on the marks, display appropriate grade
/* 
marks>=90 Grade A
marks>=75 Grade B
marks>=60 Grade C 
Grade D

*/

let marks: number = 50;
if (marks >= 90 && marks <= 100) {
  console.log("Grade A");
} else if (marks >= 75 && marks < 90) {
  console.log("Grade B");
} else if (marks >= 60 && marks < 75) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}
/* 
output-Grade D
*/

// Another example Browser selection
let browser: string = "Chrome";
if (browser === "Chrome") {
  console.log("Browser is chrome");
} else if (browser === "Firefox") {
  console.log("Browser is Firefox");
} else if (browser === "Safari") {
  console.log("Browser is safari");
} else {
  console.log("other browser");
}
/* 
output- Browser is chrome
*/
