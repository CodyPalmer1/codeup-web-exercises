"use strict";

console.log("This is my external file.");
alert("This is my external file."); // This is read first.
alert("This is not your external file."); // This is read last due to how JS reads script.
var question = confirm("Are you sure you want to continue?"); // allows user to confirm answer.
console.log(question);
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
console.log('The user\'s name is: ' + firstName + " " + lastName);
