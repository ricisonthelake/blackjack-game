# blackjack-game

 Scrimba Frontend Developer Career Path - Module 3

## Description

> This app is a simple blackjack game with one player and no house player.
>
>There are no images used in the game. Instead cards 2 through 10 are used at face value. Picture cards (jack, queen, king) are used at a value of 10 each. Ace is used at a value of 11.
>
> The player starts with a bank of $500. The player can place bets from $1 up to the amount left in the player's bank. When the player gets 21 without going over, the player wins, and the player's bank is incremented by the amount placed as a bet. If the player goes over 21, the player loses, and the player's bank is decremented by the amount placed as a bet. If the player's bank drops to 0 or below, it is immediately reset to $500 and the player may continue to play.

***

## Project Notes

### _Purpose_

The purpose of the project is to gain exposure to and learn to use the following javascript:

- arrays

```js
let cards = [];
```

- objects

```js
let player = {
    name: "Player One",
    chips: 500
};
```

- booleans

```js
let hasBlackJack = false;
let isAlive = false;
```

- if else statements

```js
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
```

- comparison operators

```js
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;

    } else {
        message = "You lose!";
        isAlive = false;
    }
```

- logical operators

```js
        if (isAlive === true && hasBlackJack === false) {
            let newCard = getRandomCard();
            sum += newCard;
            cards.push(newCard);
            renderGame();
        }
```

- loops

```js
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
```

- the Math object

```js
    let randomNumber = Math.floor(Math.random() * 13) + 1;
```

- return statements

```js
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
```
