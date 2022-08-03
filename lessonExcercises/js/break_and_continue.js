//BREAK AND CONTINUE
do {
    var number = prompt("Please enter an odd number between 1 and 50: ");
    for (var i = 1; i <= 50; i++) {
        if (i % 2 !== 0 && i === Number(number)) {
            console.log(`Here is an odd number: ${i}`);
        } else if (i % 2 !== 0 && i === number) {
            console.log(`Yikes! Skipping number: ${number}`)
        }
    }
    while (isNaN(number) || number % 2 === 0 || number >= 50 || number < 1)
}

