"strict mode";

function Player(name, id) {
  this.id = id;
  this.name = name;
  this.cards_held = [];
}

Player.prototype = {
  getName: function() {
    return this.name;
  },
  getId: function() {
    return this.id;
  },
  showCards: function() {
    return this.cards_held;
  }
};
