var appController = new AppController();

console.log("Creating the deck..");

appController.createNewDeck('standard');

console.log(appController.currentDeck);
console.log("");

console.log("Now adding the players..");

appController.addPlayer('Christos');
appController.addPlayer('Alex');
appController.addPlayer('Zoe');
appController.addPlayer('Tom');

console.log("Player 1: " + appController.currentPlayers[0].name);
console.log("Player 2: " + appController.currentPlayers[1].name);
console.log("Player 3: " + appController.currentPlayers[2].name);
console.log("Player 4: " + appController.currentPlayers[3].name);
console.log("");

console.log("By a stroke of luck, the Deck arrived in perfect sequence!");
console.log("With " + appController.currentDeck[0].name + " of " + appController.currentDeck[0].suit + " at the bottom");
console.log(appController.currentDeck[1].name + " of " + appController.currentDeck[1].suit + " next");
console.log("And " + appController.currentDeck[51].name + " of " + appController.currentDeck[51].suit + " at the top");
console.log("");

console.log("Now shuffling the cards..");

appController.shuffleCards();

console.log("The order has now changed, with " + appController.currentDeck[0].name + " of " + appController.currentDeck[0].suit + " at the bottom");
console.log(appController.currentDeck[1].name + " of " + appController.currentDeck[1].suit + " next");
console.log("And " + appController.currentDeck[51].name + " of " + appController.currentDeck[51].suit + " at the top");
console.log("No two cards are still in sequence!");
console.log("");

console.log("Seven cards each will now be dealt to the four players..");

appController.dealCardsToPlayers(7);

console.log(appController.currentPlayers[0].name + " " + "now has " + appController.currentPlayers[0].cardsHeld.length + " cards");
console.log("Their first card is " + appController.currentPlayers[0].cardsHeld[0][0].name + " of " + appController.currentPlayers[0].cardsHeld[0][0].suit);
console.log("");
console.log(appController.currentPlayers[1].name + " " + "now has " + appController.currentPlayers[1].cardsHeld.length + " cards");
console.log("Their first card is " + appController.currentPlayers[1].cardsHeld[0][0].name + " of " + appController.currentPlayers[1].cardsHeld[0][0].suit);
console.log("");
console.log(appController.currentPlayers[2].name + " " + "now has " + appController.currentPlayers[2].cardsHeld.length + " cards");
console.log("Their first card is " + appController.currentPlayers[2].cardsHeld[0][0].name + " of " + appController.currentPlayers[2].cardsHeld[0][0].suit);
console.log("");
console.log(appController.currentPlayers[3].name + " " + "now has " + appController.currentPlayers[3].cardsHeld.length + " cards");
console.log("Their first card is " + appController.currentPlayers[3].cardsHeld[0][0].name + " of " + appController.currentPlayers[3].cardsHeld[0][0].suit);
