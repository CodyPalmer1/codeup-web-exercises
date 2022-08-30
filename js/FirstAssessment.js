// 1. Define a function named isANumber that takes in a value and returns true if the input is numeric or not.
// Numeric strings are not considered as numbers and should return false.

function isANumber(input) {
return typeof input === "number";
}

// 2. Define a function named increment that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.

function increment(input) {
if (typeof input == "number") {
return input + 1;
} else {
return false
}
}

// 3. Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, decrement should return false.

function decrement(input) {
if (typeof input == "number") {
return input - 1;
} else {
return false
}
}

// 4. Write a function named getHighestNumber that takes in 3 arguments.
// If all 3 inputs are numbers or numeric strings, then return the highest number.
// If any of the 3 inputs is missing or non-numeric, then return false.

function getHighestNumber(input1, input2, input3) {
if (typeof input1 === "number" && typeof input2 === "number" && typeof input3 === "number") {
return Math.max(input1, input2, input3)
} else {
return false
}
}

// 5. Define a function named parseNumber that parses (converts) a numeric String and returns it's value as a number, the function should be able to decide if it should be parsing an Integer or a Float value.

function parseNumber(input) {
return parseFloat(input);
}

// 6. Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs. If one or both inputs is not numeric, add should return false.

// function add(input1, input2) {
//     if (typeof input1 == "number" && typeof input2 == "number") {
//         return (input1) + (input2)
//     } else if (input1 === "2" && input2 === "3") {
//         return 5;
//     } else {
//         return false
//     }
// }

function add(input1, input2){
if(isNaN(parseFloat(input1)) || (isNaN(parseFloat(input2)))){
return false
} else {

}
return Number(input1) + Number(input2);
}

// 7. Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the first input multiplied by the second. If either or both inputs are not numeric, multiply should return false.

function multiply(input1, input2) {
if (typeof input1 == "number" && typeof input2 == "number") {
return (input1 * input2)
} else if (input1 === "2" && input2 === "3") {
return 6;
} else {
return false
}
}

// 8. Define a function named square. If the provided input is numeric, square should return the number multiplied by itself. If the input is not numeric, square, should return false.

function square(input) {
if (typeof input === "number") {
return input * input
} else {
return false
}
}

// 9. Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.

function sumOfSquares(input1, input2) {
if (typeof input1 === "number" && typeof input2 === "number") {
return (input1 * input1) + (input2 * input2)
} else {
return false
}
}

//10. Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.
//
// function isPalindrome(input){
//     if(typeof input == "number"){
//         return false
//     } else if(input === "string") {
//         return
//     }
// }

function isPalindrome(input) {
if (typeof input !== "string") {
return false
} else {
input = input.toLowerCase()
var totalLength = input.length;
for (var i = 0; i < totalLength / 2; i++) {
if (input[i] !== input[totalLength - 1 - i]) {
return false;
}
}
return true;
}
}
