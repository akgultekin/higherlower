let playerDice;
let computerDice;
let playerTotal;

let playerScore = 0;
let computerScore = 0;

let playerName = document.getElementById("playerName").innerText = localStorage.getItem("textvalue") + ":";

let higherButton = document.querySelector(".hogerButton");
let lowerButton = document.querySelector(".lagerButton");
let throwButton = document.querySelector(".gooiButton");
let startGameButton = document.querySelector(".startGameButton");

let startGameText = document.getElementById("startGameText");
let youWonText = document.getElementById("youWonText");
let youLostText = document.getElementById("youLostText");
let computerWonText = document.getElementById("computerWonText");
let computerLostText = document.getElementById("computerLostText");
let drawText = document.getElementById("drawText");

document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("computerScore").innerHTML = computerScore;


higherButton.addEventListener("click", higherButtonAction);
lowerButton.addEventListener("click", lowerButtonAction);
throwButton.addEventListener("click", throwButtonAction);
startGameButton.addEventListener("click", startGameButtonAction);

const btnAudio = new Audio();
btnAudio.src = "audio/click.mp3";

const rollingDiceAudio = new Audio();
rollingDiceAudio.src = "audio/rolling_dice.mp3"

higherButton.disabled = true;
lowerButton.disabled = true;
throwButton.disabled = true;


function startGame() {

    console.log("Start Game");

    computerThrowsDice();
    playerGetsANumber();
    playersTurn();

}


function computerThrowsDice() {

    console.log("Computer throw the dice")

    let computerThrows1 = Math.floor(Math.random() * 6) + 1;
    let computerThrows2 = Math.floor(Math.random() * 6) + 1;
    let computerThrows3 = Math.floor(Math.random() * 6) + 1;

    computerDice = computerThrows1 + computerThrows2 + computerThrows3;
    console.log(computerDice)

    console.log("Computer throws in a total of" + ` ` + computerDice);

    document.querySelector(".dice1").setAttribute("src", "img/dice" + computerThrows1 + ".png");
    document.querySelector(".dice2").setAttribute("src", "img/dice" + computerThrows2 + ".png");
    document.querySelector(".dice3").setAttribute("src", "img/dice" + computerThrows3 + ".png");

}


function playerThrowsDice() {

    console.log("Player throws the dice")

    let playerThrows1 = Math.floor(Math.random() * 6) + 1;
    let playerThrows2 = Math.floor(Math.random() * 6) + 1;
    let playerThrows3 = Math.floor(Math.random() * 6) + 1;

    playerDice = playerThrows1 + playerThrows2 + playerThrows3;
    console.log(playerDice)

    document.querySelector(".dice4").setAttribute("src", "img/dice" + playerThrows1 + ".png");
    document.querySelector(".dice5").setAttribute("src", "img/dice" + playerThrows2 + ".png");
    document.querySelector(".dice6").setAttribute("src", "img/dice" + playerThrows3 + ".png");


}


function playerGetsANumber() {

    let playerNumber1 = Math.floor(Math.random() * 6) + 1;
    let playerNumber2 = Math.floor(Math.random() * 6) + 1;
    let playerNumber3 = Math.floor(Math.random() * 6) + 1;

    playerTotal = playerNumber1 + playerNumber2 + playerNumber3;
    console.log("Player throws" + ` ` + playerTotal)

}


function playersTurn() {

    higherButton.disabled = false;
    lowerButton.disabled = false;

}


function higherButtonAction() {

    playBtnSound();
    checkPlayerHigher();
    disableHigherButton();
    disableLowerButton();
    enableThrowButton();
    setTimeout(resetDice, 3500);

    checkWinner();

}


function lowerButtonAction() {

    playBtnSound();
    checkPlayerLower();
    disableHigherButton();
    disableLowerButton();
    enableThrowButton();
    setTimeout(resetDice, 3500);

    checkWinner();

}


function throwButtonAction() {

    playBtnSound();
    playRollingDiceSound();
    playerThrowsDice();
    disableThrowButton();
    checkCpu();
    setTimeout(resetDice, 3500);
    setTimeout(startGame, 3500);

    checkWinner();

}


function startGameButtonAction() {

    playBtnSound();
    showStartGameText();
    startGameButton.disabled = true;

    setTimeout(startGame, 3000);

}


function disableHigherButton() {

    higherButton.disabled = true;

}


function disableLowerButton() {

    lowerButton.disabled = true;

}


function disableThrowButton() {

    throwButton.disabled = true;

}


function enableHigherButton() {

    higherButton.disabled = false;

}


function enableLowerButton() {

    lowerButton.disabled = false;

}


function enableThrowButton() {

    throwButton.disabled = false;

}


function showStartGameText() {
    
    document.getElementById("startGameText").style.display = "block";
    setTimeout(hideStartGameText, 3000);

}


function showYouWonText() {

    document.getElementById("youWonText").style.display = "block";
    setTimeout(hideYouWonText, 3000);

}


function showYouLostText() {

    document.getElementById("youLostText").style.display = "block";
    setTimeout(hideYouLostText, 3000);

}


function showComputerWonText() {

    document.getElementById("computerWonText").style.display = "block";
    setTimeout(hideComputerWonText, 3000);

}


function showComputerLostText() {

    document.getElementById("computerLostText").style.display = "block";
    setTimeout(hideComputerLostText, 3000);

}


function showDrawText() {

    document.getElementById("drawText").style.display = "block";
    setTimeout(hideDrawText, 3000);

}


function hideStartGameText() {

    document.getElementById("startGameText").style.display = "none";

}


function hideYouWonText() {

    document.getElementById("youWonText").style.display = "none";

}


function hideYouLostText() {

    document.getElementById("youLostText").style.display = "none";

}

function hideComputerWonText() {

    document.getElementById("computerWonText").style.display = "none";

}


function hideComputerLostText() {

    document.getElementById("computerLostText").style.display = "none";

}


function hideDrawText() {

    document.getElementById("drawText").style.display = "none"; 

}


function checkPlayerHigher() {

    if (playerTotal > computerDice) {
        console.log("You win")
        setTimeout(showYouWonText, 500);
        document.getElementById("playerScore").innerHTML = ++playerScore;
    } else if (playerTotal < computerDice) {
        console.log("Computer wins")
        setTimeout(showYouLostText, 500);
        document.getElementById("computerScore").innerHTML = ++computerScore;
    } else if (playerTotal == computerDice) {
        console.log("Draw")
        setTimeout(showDrawText, 500);
    }
    
}


function checkPlayerLower() {

    if (playerTotal < computerDice) {
        console.log("You won")
        setTimeout(showYouWonText, 500);
        document.getElementById("playerScore").innerHTML = ++playerScore;
    } else if (playerTotal > computerDice) {
        console.log("You lost")
        setTimeout(showYouLostText, 500);
        document.getElementById("computerScore").innerHTML = ++computerScore;
    } else if (playerTotal == computerDice) {
        console.log("Draw")
        setTimeout(showDrawText, 500);
    }
    
}


function checkCpu() {

    if (computerDice > playerTotal) {
        console.log("Computer won")
        setTimeout(showComputerWonText, 500);
        document.getElementById("computerScore").innerHTML = ++computerScore;
    } else if (computerDice < playerTotal) {
        console.log("Computer lost")
        setTimeout(showComputerLostText, 500);
        document.getElementById("playerScore").innerHTML = ++playerScore;
    } else if (computerDice == playerTotal) {
        console.log("Draw")
        setTimeout(showDrawText, 500);
    }

}


function checkWinner() {

    if (playerScore == 5) {

        window.location.href = "youwonpage.html";
    
    } else if (computerScore == 5) {
    
        window.location.href = "youlostpage.html";
    
    }

}


function resetDice() {

    document.querySelector(".dice1").setAttribute("src", "img/dice" + ".png");
    document.querySelector(".dice2").setAttribute("src", "img/dice" + ".png");
    document.querySelector(".dice3").setAttribute("src", "img/dice" + ".png");
    document.querySelector(".dice4").setAttribute("src", "img/dice" + ".png");
    document.querySelector(".dice5").setAttribute("src", "img/dice" + ".png");
    document.querySelector(".dice6").setAttribute("src", "img/dice" + ".png");

}


function playBtnSound() {

    btnAudio.play();

}


function playRollingDiceSound() {

    rollingDiceAudio.play();

}