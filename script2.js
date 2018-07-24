"use strict",
startGame();

function startGame() {
    const gameQuestion = prompt("Would you like to play");
    if (gameQuestion === "yes") {
        const name = prompt("What is your name?");
        startCombat(name);
    } else {
        alert("Maybe next time!");
    }
}

function getDamage() {
    return Math.floor(Math.random() * 5) + 1;
}

function startCombat(name) {
    let userHealth = 40;
    let grantHealth = 10;
    let wins = 0

    while (grantHealth > 0) {
        const option = prompt("Would you like to attack or quit?");
        if (option === "attack") {
            userHealth -= getDamage();
            console.log(`${name} has ${userHealth} health left!`);
            grantHealth -= getDamage();
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
        } else if (option === "quit") {
            console.log("Try again later!");
            break;
        }
    }
}