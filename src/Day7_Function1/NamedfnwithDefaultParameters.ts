// Named function with default parameters rate:number=0.50 ye default value/ parameter hai
function calculateDiscount(price: number, rate: number = 0.5): void {
  let discount: number = price * rate;
  console.log("Discount Amount:", discount);
}
calculateDiscount(1000, 0.3);
calculateDiscount(1000);
/* 

Discount Amount: 300
Discount Amount: 500
*/
