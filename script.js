let userHealth = 40;
let grantHealth = 10;
let wins = 0

const gameQuestion = prompt("Would you like to play");


if (gameQuestion === "yes") {
    const name = prompt("What is your name?");

    while (userHealth > 0) {
        userHealth = (userHealth - Math.floor(Math.random() * 2) - 1);
        console.log(`${name} has ${userHealth} health left!`)
        grantHealth = (grantHealth - Math.floor(Math.random() * 2) - 1);
        console.log(`Grant has ${grantHealth} health left`);
        if (grantHealth <= 0) {
            wins++;
            console.log(`You have beat Grant ${wins} time(s)`);
        }
        if (wins === 3) {
            console.log("YOU WIN");
            break;


        }
    }


}