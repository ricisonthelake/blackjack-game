let player = {
    name: "Player One",
    chips: 400
};

let cards = [];
let sum = 0;
let bet = 0;
let bank = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let betAmountEl = document.getElementById("bet-amount").value;

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + "'s Bank" + ": $" + player.chips;
let playerBetEl = document.getElementById("player-bet")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    let betAmountEl = document.getElementById("bet-amount").value;

    if (betAmountEl < 1) {
        alert("please place a bet")
    } else if (betAmountEl > player.chips) {
        alert("cannot bet more than your bank")
    } else {
        playerBetEl.textContent = player.name + " Bets: $" + betAmountEl;

        isAlive = true
        hasBlackJack = false;

        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame();
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;

    } else {
        message = "You lose!";
        isAlive = false;
    }
    messageEl.textContent = message;
    updateChips(isAlive)
}

function updateChips(alive) {
    let betAmountEl = document.getElementById("bet-amount").value;
    if (betAmountEl < 1) {
        alert("please place a bet")
        betAmountEl = 0
    } else if (betAmountEl > player.chips) {
        alert("cannot bet more than your bank")
        betAmountEl = 0
    } else {
        playerBetEl.textContent = player.name + " Bets: $" + betAmountEl
    }

    if (!alive && !hasBlackJack) {
        player.chips -= Number(betAmountEl);
        playerEl.textContent = player.name + "'s Bank" + ": $" + player.chips;
    } else if (alive && hasBlackJack) {
        player.chips += Number(betAmountEl);
        playerEl.textContent = player.name + "'s Bank" + ": $" + player.chips;
    }
    if (player.chips < 1) {
        alert("your bank went to 0 and has been reset")
        player.chips += 500
        playerEl.textContent = player.name + "'s Bank" + ": $" + player.chips;
    }
}

function getNewCard() {
    let betAmountEl = document.getElementById("bet-amount").value;

    if (betAmountEl < 1) {
        betAmountEl = 0
        alert("please place a bet")

    } else if (betAmountEl > player.chips) {
        betAmountEl = 0
        alert("cannot bet more than your bank")

    } else {
        playerBetEl.textContent = player.name + " Bets: $" + betAmountEl
        if (isAlive === true && hasBlackJack === false) {
            let newCard = getRandomCard();
            sum += newCard;
            cards.push(newCard);
            renderGame();
        }
    }
}

