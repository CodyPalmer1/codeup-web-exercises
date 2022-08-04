// var x = 0
// while(x < 10){
//     console.log(x)
//     ++x;
// }
// console.log("End of while loop.");

// do{
//     ++x
//     console.log(x);
// } while (x < 10);
// console.log("End of do while loop.");

// for(var apple = 0; apple < 10; apple+=3){
//     console.log(apple);
// }

// for(var i = 5; i <= 100; i += 5){
//     console.log(i);
//     if(i === 50)
//         break;
//     console.log("I is still less than 50");
// }

    for (var i = 5; i <= 100; i += 5) {
        console.log(i);
        if (i === 50) {
            continue;
        }
        console.log(i + " is not 50");
    }