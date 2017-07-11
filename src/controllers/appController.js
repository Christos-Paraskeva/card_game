"strict mode";

function AppController(player = new Player(), deck = new Deck()) {
  this.currentDeck = [];
  this.currentPlayers = [];
  this.player = player;
  this.deck = deck;
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
  }
};
