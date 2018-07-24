const gameQuestion = prompt("Would you like to play");


if (gameQuestion === "yes") {

    let userHealth = 40;
    let grantHealth = 10;
    let wins = 0

    const name = prompt("What is your name?");

    while (gameQuestion) {
        userHealth -= Math.floor(Math.random() * 2) + 1;
        console.log(`${name} has ${userHealth} health left!`);
        grantHealth -= Math.floor(Math.random() * 2) + 1;
        console.log(`Grant has ${grantHealth} health left`);
        if (wins === 3) {
            console.log("YOU WIN");
            break;
        } else if (userHealth <= 0) {
            console.log("Grant wins!");
            break;
        } else if (grantHealth <= 0) {
            wins++;
            grantHealth = 10;
            console.log(`You have beat Grant ${wins} time(s)`);
        }

    }
} else {
    alert("Maybe next time!");
}