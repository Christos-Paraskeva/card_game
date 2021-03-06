"strict mode";

function AppController(player = new Player(), deck = new Deck(), dealer = new Dealer()) {
  this.currentDeck = [];
  this.currentPlayers = [];
  this.player = player;
  this.deck = deck;
  this.dealer = dealer;
}

AppController.prototype = {
  addPlayer: function(name) {
    var newPlayer = this.player.createPlayer(name, this.currentPlayerCount());
    this.currentPlayers.push(newPlayer);
  },

  currentPlayerCount: function() {
    return this.currentPlayers.length;
  },

  createNewDeck: function(type) {
    this.currentDeck = this.deck.createDeck(type);
  },

  showCurrentDeck: function() {
    return this.currentDeck;
  },

  shuffleCards: function() {
    this.dealer.shuffleTheDeck(this.currentDeck);
  },

  dealCardsToPlayers: function(howManyCards) {
    this.dealer.dealTheCards(howManyCards, this.currentPlayers, this.currentDeck);
  }
};
