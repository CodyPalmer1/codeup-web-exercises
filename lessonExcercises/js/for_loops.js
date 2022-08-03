// FOR LOOP EXERCISES
// 2.
var num = prompt('Enter an integer: '); //Prompt for user input
function showMultiplicationTable(x) { //Function to create mulitplation table
    for (let i = 1; i <= 10; i++) { // for loop that iterates from 1 to 10
        const result = i * x; // finds sum of x and i and stores it in the result
        console.log(`${x} x ${i} = ${result}`);
    }
}
console.log(showMultiplicationTable(num)); // allows user prompt input to be console logged through the function above

//3.
function randomNum(x){ // Function that gives up 10 random numbers
    for (var i = 1; i <= 10; i++){ // for loop that iterates from 1 - 10
        var num = Math.floor((Math.random() * 180) + 20); // gives random numbers fup to 200
        if(num % 2 === 0) { // informs user if number is even
            console.log(`${num} is even`);
        } else { // informs user if number is odd
            console.log(`${num} is odd`);
        }
    }
}
console.log(randomNum(1));

// 4.
for (let i = 1; i < 10; i++){ //For loop to iterate for 1 - 10, that show each number with as many as it is
    console.log(i.toString().repeat(i));
}

// 5.
for (let i = 100; i > 4; i -= 5){ //For loop that counts down from 100 to 0 using 5's
    console.log(i);
}
