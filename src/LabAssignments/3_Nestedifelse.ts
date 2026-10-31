// Check if a number is positive and even.
function checknumber(num: number) {
  if (num > 0) {
    if (num % 2 === 0) {
      console.log(`${num} is positive and even`);
    } else {
      console.log(`${num} is positive but odd`);
    }
  } else {
    console.log(`${num} is not positive`);
  }
}
checknumber(10);
checknumber(-7);
checknumber(15);
checknumber(16);
/* 
output- 
10 is positive and even
-7 is not positive
15 is positive but odd
16 is positive and even
*/
//  Check if a character is an uppercase vowel.
function checkUppercasevowel(char: string) {
  if (char >= "A" && char <= "Z") {
    if (
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      console.log(`${char} is an uppercasevowel`);
    } else {
      console.log(`${char} is not an uppercase vowel`);
    }
  } else {
    console.log(`${char} is not an uppercase letter `);
  }
}
checkUppercasevowel("A");
checkUppercasevowel("a");
checkUppercasevowel("B");
checkUppercasevowel("E");
/* 
output- 
A is an uppercasevowel
a is not an uppercase letter 
B is not an uppercase vowel
E is an uppercasevowel
*/
//
function checkUppercaseVowel(char: string) {
  if (
    char === "A" ||
    char === "E" ||
    char === "I" ||
    char === "O" ||
    char === "U"
  ) {
    console.log(`${char} is an Uppercase vowel`);
  } else {
    console.log(`${char} is not an Uppercase vowel`);
  }
}
checkUppercaseVowel("A");
checkUppercaseVowel("B");
checkUppercaseVowel("a");
checkUppercaseVowel("E");
checkUppercaseVowel("I");
checkUppercaseVowel("i");
checkUppercaseVowel("U");
checkUppercaseVowel("u");
/* 
output- 
A is an uppercasevowel
a is not an uppercase letter 
B is not an uppercase vowel
E is an uppercasevowel
A is an Uppercase vowel
B is not an Uppercase vowel
a is not an Uppercase vowel
E is an Uppercase vowel
I is an Uppercase vowel
i is not an Uppercase vowel
U is an Uppercase vowel
u is not an Uppercase vowel

*/
// Find the largest of three numbers.
function findLargestnumber(num1: number, num2: number, num3: number) {
  if (num1 > num2) {
    if (num1 > num3) {
      console.log(`${num1} is the largest number`);
    } else {
      console.log(`${num3} is the largest number`);
    }
  } else {
    if (num2 > num3) {
      console.log(`${num2} is the largest number`);
    } else {
      console.log(`${num3} is the largest number`);
    }
  }
}
findLargestnumber(10, 20, 30);
findLargestnumber(1, 2, 3);
findLargestnumber(99, 98, 90);
findLargestnumber(14, 15, 22);
/* 
output- 
30 is the largest number
3 is the largest number
99 is the largest number
22 is the largest number
*/
// Check if a number is a multiple of both 5 and 10.
function checkMultiplyby5and10(num: number) {
  if (num % 5 === 0) {
    if (num % 10 === 0) {
      console.log(`${num} is a multiple of both 5 and 10`);
    } else {
      console.log(`${num} is a multiple of 5 but not 10`);
    }
  } else {
    console.log(`${num} is not a multiple of 5 and 10`);
  }
}
checkMultiplyby5and10(50);
checkMultiplyby5and10(30);
checkMultiplyby5and10(17);
checkMultiplyby5and10(100);
checkMultiplyby5and10(40);
checkMultiplyby5and10(80);
checkMultiplyby5and10(35);
/* 
output- 
50 is a multiple of both 5 and 10
30 is a multiple of both 5 and 10
17 is not a multiple of 5 and 10
100 is a multiple of both 5 and 10
40 is a multiple of both 5 and 10
80 is a multiple of both 5 and 10
35 is a multiple of 5 but not 10
*/
//   Check if a character is a vowel or consonant.
function checkVowelConsonant(char: string) {
  if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
    if (
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U" ||
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      console.log(`${char} is a vowel`);
    } else {
      console.log(`${char} is a consonant`);
    }
  } else {
    console.log(`${char} is not an Alphabets`);
  }
}
checkVowelConsonant("a");
checkVowelConsonant("A");
checkVowelConsonant("b");
checkVowelConsonant("B");
checkVowelConsonant("5");
/* 
output -
a is a vowel
A is a vowel
b is a consonant
B is a consonant
5 is not an Alphabets
*/
// Check if a number is divisible by both 2 and 3
function checkDivisibility(num4: number) {
  if (num4 % 2 === 0) {
    if (num4 % 3 === 0) {
      console.log(`${num4} is divisible by both 2 and 3`);
    } else {
      console.log(`${num4} is divisible by 2 but not by 3`);
    }
  } else {
    console.log(`${num4} is not divisible by both 2 and 3`);
  }
}
checkDivisibility(9);
checkDivisibility(99);
checkDivisibility(55);
checkDivisibility(10);
checkDivisibility(15);
checkDivisibility(25);
checkDivisibility(12);
/* 
output- 
9 is not divisible by both 2 and 3
99 is not divisible by both 2 and 3
55 is not divisible by both 2 and 3
10 is divisible by 2 but not by 3
15 is not divisible by both 2 and 3
25 is not divisible by both 2 and 3
12 is divisible by both 2 and 3
*/
