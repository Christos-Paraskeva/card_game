"strict mode";

function Dealer() {
  this.currentPlayers = [];
  this.deck = [];
}

Dealer.prototype = {
  dealCards: function (howManyCards, currentPlayers, deck) {
    this.currentPlayers = currentPlayers;
    this.deck = deck;
    for(var i=0; i < howManyCards; i++) {
      for(var p=0; p < this.currentPlayers.length; p++) {
        this.currentPlayers[p].cardsHeld.push(this.deck.splice(0, 1));
      }
    }
  }
};
