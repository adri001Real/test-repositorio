

// console.log("HELLO FROM OUR FIRST JS FILE!!!")

// const dayOfWeek = prompt('Enter a day').toLowerCase();

// if(dayOfWeek === 'monday'){
//     console.log("ughh i hate mondays");
// }else if(dayOfWeek === 'saturday'){
//     console.log("yay i losve saturdays");
// }else if(dayOfWeek === 'friday'){
//     console.log("Fridays are decent, especially after work");
// }else{
//     console.log("Meh");
// }

// const password = prompt("please enter a new password")

// if(password.length >= 6){
//     if(password.indexOf(' ')===-1){
//         console.log("Valid Password!");
//     }else{
//         console.log("Password cannot contain spaces");
//     }
// }else{  
//     console.log("Password too short Must be 6+ characters");
// }

/*
let firstName = prompt("enter your first name")

console.log(!firstName);

if(!firstName){// si es  verdader es decir que si no introduce algo entonces esto se hace.
    firstName = prompt("try again");
}*/

//the break keywoard

/* let targetNum = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random()*10);

while(true){
    guess = Math.floor(Math.random()*10);
    if(guess === targetNum){
        console.log(`CORRECT! Guessed: ${guess} & target was: ${targetNum}`);
        break;
    }
    else{
        console.log(`Guessed ${guess}...Incorrect!`);
    }
}
 */


// let input = prompt("Hey, say something!");

// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }

// console.log("OK YOU WIN!")


// for(let i = 0; i < 100; i++){
//     console.log(i);
//     if(i === 100) break
// }
y

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempt = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempt++;
    if (guess > targetNum) {
        guess = prompt("Too hig Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess: ")
    }
}

if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("")
    console.log(`You got it! It took you ${attempts} guesses`)
}