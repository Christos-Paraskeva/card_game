"strict mode";

function Dealer(shuffle = new Shuffle()) {
  this.currentPlayers = [];
  this.shuffle = shuffle;
}

Dealer.prototype = {
  shuffleTheDeck: function(deck) {
     this.shuffle.defaultShuffle(deck);
  },

  dealTheCards: function(howManyCards, currentPlayers, deck) {
    this.currentPlayers = currentPlayers;

    if (deck.length - (currentPlayers.length * howManyCards) >= 0 && currentPlayers.length !== 0) {
      for(var i=0; i < howManyCards; i++) {
        for(var p=0; p < this.currentPlayers.length; p++) {
          this.currentPlayers[p].cardsHeld.push(deck.splice(0, 1));
        }
      }
    }
    else {
      throw new Error("Cannot deal: not enough cards or players");
    }
  },
};
