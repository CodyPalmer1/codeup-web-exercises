console.log("Hello from external JavaScript");

alert ('Welcome to my Website!');
var userInput = prompt("What is your favorite color? Please enter below:");
alert ("Great, " + userInput + " is my favorite color too!");

var lilMerDays = prompt("How many days have you rented the Little Mermaid for? Enter below:");
var broBearDays = prompt("How many days have you rented the Brother Bear for? Enter below:");
var hercDays = prompt("How many days have you rented the Herculese for? Enter below:");
const cost = 3;
var total = (lilMerDays * cost) + (broBearDays * cost) + (hercDays * cost);
alert ("The total cost of renting all three movies is: " + total);

var googleHours = prompt("How many hours did you work this week for Google? Enter below: ");
var amazonHours = prompt("How many hours did you work this week for Amazon? Enter below: ");
var facebookHours = prompt("How many hours did you work this week for Facebook? Enter below: ");
var totalPay = (googleHours * 400) + (amazonHours * 380) + (facebookHours * 350);
alert ("You made a total of $" + totalPay + " working this week.");

var fullClass = confirm("Is the class full? OK for Yes, CANCEL for No. Enter below: ");
var isSchedCon = confirm ("Is there a schedule conflict for this student? OK for Yes, CANCEL for No. Enter below: ");
if (fullClass == false && isSchedCon == false){
    alert("You will be able to enroll in this class.")
} else {
    alert("You will not be able to roll in this class. Sorry, have a good day.")
}

var itemsBought = prompt("How many items have you bought? Enter below: ");
var offer = prompt("Has the offer expired? 1 for NO, 2 for YES.")
var premiumUser = prompt("Are you a premium user? 1 for NO, 2 for YES.");
if (itemsBought >= 2 && offer == 1 || premiumUser == 2 ){
    alert("The offer will be applied to your total.");
} else {
    alert("The offer will not be applied to your total.");
};