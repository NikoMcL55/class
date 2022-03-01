let prompter = require("prompt-sync");
let prompt = prompter({});

let randomnumber=Math.floor(Math.random() * (20 - 10 + 1) + 10)

function getguessfromplayer(playerx) {
    let guess = prompt("Player " + playerx + ", enter either 1 or 2:")

    return guess
}

function playerup(a){
      return a+1
}


    function game(whichplayer) {
            while (randomnumber > 0) {

                    randomnumber = randomnumber - getguessfromplayer(playerup(0))
                console.log("The number is now " + randomnumber)
                randomnumber = randomnumber - getguessfromplayer(playerup(1))
                console.log("The number is now " + randomnumber)
            }

            console.log("Congratulations Player " + playerup(0) + "!" + " You won The Countdown Game!")




    }




function playgame(randomnumber){
    console.log("The starting number for the game is " + randomnumber)
    game(1)

}
function main(){
    console.log("Welcome to The Countdown Game!")
    playgame(randomnumber)
}
main()