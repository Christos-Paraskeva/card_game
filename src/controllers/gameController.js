"strict mode";

function GameController(player = new Player()) {
  this.currentDeck = [];
  this.currentPlayers = [];
  this.player = player;
}

GameController.prototype = {
  addPlayer: function(name) {
    var newPlayer = this.player.createPlayer(name, this.currentPlayers.length);
    this.currentPlayers.push(newPlayer);
  },
};
