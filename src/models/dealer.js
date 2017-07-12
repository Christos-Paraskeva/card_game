"strict mode";

function Dealer(shuffle = new Shuffle()) {
  this.currentPlayers = [];
  this.shuffle = shuffle;
}

Dealer.prototype = {
  shuffleTheDeck: function (deck) {
     this.shuffle.defaultShuffle(deck);
  },
  
  dealTheCards: function (howManyCards, currentPlayers, deck) {
    this.currentPlayers = currentPlayers;
    this.currentDeck = deck;
    for(var i=0; i < howManyCards; i++) {
      for(var p=0; p < this.currentPlayers.length; p++) {
        this.currentPlayers[p].cardsHeld.push(this.currentDeck.splice(0, 1));
      }
    }
  }
};
