do {
    var number = prompt("enter a number between 1 and 50");
    for(var i = 1; i <= 50; i++){
        if(i % 2 !== 0 && i === Number(number)){
            console.log(`Yikes! Skipping number: ${i}`)
        }else if(i % 2 !== 0) {
            console.log(`This is an odd number: ${i}`)
        }
    }
}while (isNaN(number) || number % 2 === 0 || number >= 50 || number < 1);



