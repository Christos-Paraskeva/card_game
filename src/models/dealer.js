"strict mode";

function Dealer(currentPlayers, deck) {
  this.currentPlayers = currentPlayers;
  this.deck = deck;
}

Dealer.prototype = {
  dealCards: function (howMany) {
    for(var i=0; i < howMany; i++) {
      for(var p=0; p < this.currentPlayers.length; p++) {
        this.currentPlayers[p].cardsHeld.push(this.deck.splice(0, 1));
      }
    }
  }
};
