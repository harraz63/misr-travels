// ============1===============
// Problem 1
// var num = Number(window.prompt("Enter Your Number: "));
// console.log(num);

// ============2===============
// var num = Number(window.prompt("Enter Your Number: "));

// if (num % 3 === 0 && num % 4 === 0)
// {
//   console.log("Yes");
// }
// else
// {
//   console.log("No");
// }

// ============3===============
// var numOne = Number(window.prompt("Enter First Number: "));
// var numTwo = Number(window.prompt("Enter Second Number: "));

// if (numOne > numTwo)
// {
//   console.log(numOne);
// }
// else if (numTwo > numOne)
// {
//   console.log(numTwo);
// }
// else
// {
//   console.log("Numbers Are Equal!");
// }

// ============4===============
// var num = Number(window.prompt("Enter Your Number: "));

// if (num > 0)
// {
//   console.log("Positive");
// }
// else if (num < 0)
// {
//   console.log("Negative");
// }
// else
// {
//   console.log("Number Is Zero");
// }

// ============5===============
// ===1===
// var numOne = Number(window.prompt("Enter First Number: "));
// var numTwo = Number(window.prompt("Enter Second Number: "));
// var numThree = Number(window.prompt("Enter Third Number: "));

// var max = numOne;
// var min = numOne;

// if (numTwo > max)
// {
//   max = numTwo;
// }
// else if (numTwo < min)
// {
//   min = numTwo;
// }

// if (numThree > max)
// {
//   max = numThree;
// }
// else if (numThree < min)
// {
//   min = numThree;
// }

// console.log("Maximum Number: " + max);
// console.log("Minimum Number: " + min);

// ===2===
// var numOne = Number(window.prompt("Enter First Number: "));
// var numTwo = Number(window.prompt("Enter Second Number: "));
// var numThree = Number(window.prompt("Enter Third Number: "));

// var max;
// var min;

// if (numOne > numTwo && numOne > numThree)
// {
//   max = numOne;
// }
// else if (numTwo > numOne && numTwo > numThree)
// {
//   max = numTwo;
// }
// else
// {
//   max = numThree;
// }

// if (numOne < numTwo && numOne < numThree)
// {
//   min = numOne;
// }
// else if (numTwo < numOne && numTwo < numThree)
// {
//   min = numTwo;
// }
// else
// {
//   min = numThree;
// }

// console.log("Maximum Number: " + max);
// console.log("Minimum Number: " + min);

// ============6===============
// var num = Number(window.prompt("Enter Your Number: "));

// if (num % 2 == 0)
// {
//   console.log("Number Is Even");
// }
// else if (num % 2 != 0)
// {
//   console.log("Number Is Odd");
// }

// ============8===============
// var char = window.prompt("Enter A Character: ");

// if (char == "a" || char == "A")
// {
//   console.log("Vowel");
// }
// else if (char == "e" || char == "E")
// {
//   console.log("Vowel");
// }
// else if (char == "i" || char == "I")
// {
//   console.log("Vowel");
// }
// else if (char == "o" || char == "O")
// {
//   console.log("Vowel");
// }
// else if (char == "u" || char == "U")
// {
//   console.log("Vowel");
// }
// else
// {
//   console.log("Consonant");
// }

// ============9===============
// var num = Number(window.prompt("Enter Your Number: "));

// for (var i = 1; i <= num; i++) {
//   console.log(i);
// }

// ============10===============
// var num = Number(window.prompt("Enter Your Number: "));

// for (var i = 1; i <= 12; i++) {
//   console.log(num * i);
// }

// ============11===============
// var num = Number(window.prompt("Enter Your Number: "));

// for (var i = 2; i <= num; i++) {

//   if (i % 2 == 0)
//   {
//     console.log(i);
//   }
// }

// ============12===============
// var numOne = Number(window.prompt("Enter First Number: "));
// var numTwo = Number(window.prompt("Enter Second Number: "));

// var result = numOne ** numTwo;

// console.log(result);

// ============================
// var num, totalMarks = 0;

// for (var i = 1; i <= 5; i++) {
//   num = Number(window.prompt("Enter Mark Of Subject " + i + ": "));
//   totalMarks += num;
// }

// var averageMarks = totalMarks / 5;
// var percentage = (totalMarks / (5 * 100)) * 100;

// console.log("Total Marks: " + totalMarks);
// console.log("Average Marks: " + averageMarks);
// console.log("Percentage: " + percentage);

// ============13===============
// var monthNum = Number(window.prompt("Enter Month Number: "));

// switch (monthNum) {
//   case 1:
//     console.log("Days In Month: 31");
//     break;

//   case 2:
//     console.log("Days In Month: 28");
//     break;

//   case 3:
//     console.log("Days In Month: 31");
//     break;

//   case 4:
//     console.log("Days In Month: 30");
//     break;

//   case 5:
//     console.log("Days In Month: 31");
//     break;

//   case 6:
//     console.log("Days In Month: 30");
//     break;

//   case 7:
//     console.log("Days In Month: 31");
//     break;

//   case 8:
//     console.log("Days In Month: 31");
//     break;

//   case 9:
//     console.log("Days In Month: 30");
//     break;

//   case 10:
//     console.log("Days In Month: 31");
//     break;

//   case 11:
//     console.log("Days In Month: 30");
//     break;

//   case 12:
//     console.log("Days In Month: 31");
//     break;

//   default:
//     console.log("Invalid Month Number!");
// }

// ============14===============
// var totalMarks = 0;

// for (var i = 1; i <= 5; i++) {

//   var mark = Number(window.prompt("Enter Mark Of Subject " + i + ": "));
//   totalMarks += mark;
// }

// var percentage = (totalMarks / 500) * 100;

// if (percentage >= 90)
//   {
//     grade = "Grad A";
//   }
//   else if (percentage >= 80)
//   {
//     grade = "Grad B";
//   }
//   else if (percentage >= 70)
//   {
//     grade = "Grad C";
//   }
//   else if (percentage >= 60)
//   {
//     grade = "Grad D";
//   }
//   else if (percentage >= 40)
//   {
//     grade = "Grad E";
//   }
//   else if (percentage < 40)
//   {
//     grade = "Grad F";
//   }

// console.log("Percentage: " + percentage);
// console.log("Grade: " + grade);

// ============15===============
// var month = window.prompt("Enter Month: ");
// var days;

// switch(month.toLowerCase()) {
//   case 'january':
//   case 'march':
//   case 'may':
//   case 'july':
//   case 'august':
//   case 'october':
//   case 'december':
//       days = 31;
//       break;
//   case 'april':
//   case 'june':
//   case 'september':
//   case 'november':
//       days = 30;
//       break;
//   case 'february':
//       days = 28;
//       break;
//   default:
//       days = -1;
// }

// console.log(month + " Has " + days + " Days");

// ============16===============
// var char = window.prompt("Enter Character: ");

// switch (true) {
//   case char == "e" || char == "E":
//   case char == "o" || char == "O":
//   case char == "a" || char == "A":
//   case char == "i" || char == "I":
//   case char == "u" || char == "U":
//     console.log("Character Is Vowel!");
//     break;

//   default:
//     console.log("Character Is Consonant!");
// }

// ============17===============
// var numOne = Number(window.prompt("Enter First Number: "));
// var numTwo = Number(window.prompt("Enter Second Number: "));

// switch (true) {
//   case numOne > numTwo:
//     console.log("Number One Is Biggest = " + numOne);
//     break;

//   case numTwo > numOne:
//     console.log("Number Two Is Biggest = " + numTwo);
//     break;

//   default:
//     console.log("Invalid Numbers!");
// }

// ============18===============
// var num = Number(window.prompt("Enter Your Number: "));

// switch (num % 2) {
//   case 0:
//     console.log("Number Is Even");
//     break;

//   case 1:
//     console.log("Number Is Odd");
//     break;

//   default:
//     console.log("Invalid Number!");
// }

// ============19===============
// var num = Number(window.prompt("Enter Your Number: "));

// switch (true) {
//   case num > 0:
//     console.log("Number Is Positive");
//     break;

//   case num < 0:
//     console.log("Number Is Negative");
//     break;

//   default:
//     console.log("Number Is Zero!");
// }

// ============20===============
// var numOne = Number(window.prompt("Enter First Number: "));
// var numTwo = Number(window.prompt("Enter Second Number: "));
// var result;
// var op = window.prompt("Enter Operation(+ , - , * , /): ");

// switch (op) {
//   case "+":
//     result = numOne + numTwo;
//     break;

//   case "-":
//     result = numOne - numTwo;
//     break;

//   case "*":
//     result = numOne * numTwo;
//     break;

//   case "/":
//     result = numOne / numTwo;
//     break;

//   default:
//     console.log("Inavalid Operation!");
// }

// console.log(numOne + " " + op + " " + numTwo + " = " + result);
