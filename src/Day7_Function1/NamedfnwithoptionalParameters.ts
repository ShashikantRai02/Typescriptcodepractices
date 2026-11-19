//  Named function with optional Parameters
function displayDetails(id: number, name: string, mailID?: string): void {
  console.log("ID:", id);
  console.log("Name:", name);
  if (mailID !== undefined) {
    console.log("Email:", mailID);
  }
}
displayDetails(111, "Alice", "abc1@gmail.com");
displayDetails(121, "Bob");
displayDetails(121, "Krisha");
/* 
output--
ID: 111
Name: Alice
Email: abc1@gmail.com
ID: 121
Name: Bob
ID: 121
Name: Krisha
*/
