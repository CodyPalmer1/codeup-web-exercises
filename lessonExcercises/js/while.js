//WHILE
var num = 1;
while(num < 65536){
    num *= 2
    console.log(num);
}

//DO WHILE
// 1. generates a random number between 50 and 100 representing the amount of cones
// 2. sell cones inside of loop
// 3. inside loop generate number between 1 - 5 (This is the amount of cones being bought)
// 4. in a do while console log the amount of cones sold to each person.

var allCones = Math.floor(Math.random() * 50) + 50; // This is how you get a random number between 50 and 100
do {
    var soldCones = Math.floor(Math.random() * 5) + 1; // This expression will generate a random number between 1 and 5
    if(soldCones <= allCones){
        console.log(`${soldCones} cones sold...`);
        allCones -= soldCones;
    }else if(soldCones > allCones){
        console.log(`Cannot sell you ${soldCones} cones I only have ${allCones}...`);
    }
    //console.log(allCones);
}while(allCones !== 0);
console.log("Yay! I sold them all!");