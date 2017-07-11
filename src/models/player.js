"strict mode";

function Player(name, id) {
  this.id = id;
  this.name = name;
  this.cardsHeld = [];
}

Player.prototype = {
  getName: function() {
    return this.name;
  },
  getId: function() {
    return this.id;
  },
  showCards: function() {
    return this.cardsHeld;
  },
  createPlayer: function(name, id) {
    return new Player(name, id);
  }
};
