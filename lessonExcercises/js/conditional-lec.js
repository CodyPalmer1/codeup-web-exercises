console.log("working");

var username = prompt("Enter your username: ").toLowerCase();
var password = prompt("Enter your password: ").toLowerCase();

var currUsername = "username"
var currPassword = "password"

if (username === currUsername && password === currPassword){
    alert("You have logged in.");
} else if (username !== currUsername && password !== currPassword){
    alert("Invalid username and password.");
} else if (username !== currUsername){
    alert("Invalid username.");
} else if (password !== currPassword){
    alert("Invalid password.");
} else {
    alert("Unexpected error.")
}

/*var isRaining;
isRaining = confirm("Is it raining?");
console.log((isRaining) ? console.log("Wear a jacket, its raining":"Nope, take a hike."));*/

var favMovie = prompt("Whats your favorite movie?").toLowerCase();
switch (favMovie){
    case "toy story":
        alert("I despise this movie");
        break;
    case "lion king":
        alert("mid");
        break;
    case "back to the future":
        alert("I dont kno who likes this.");
        break;
    default:
        alert("Invalid movie");
}