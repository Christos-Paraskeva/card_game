function PlayerDouble(id, name) {
  this.id = id;
  this.name = name;
  this.cards_held = [];
}

var currentPlayers = [];

currentPlayers.push(new PlayerDouble(1, 'Player1'),
new PlayerDouble(2, 'Player2'),
new PlayerDouble(3, 'Player3'),
new PlayerDouble(4, 'Player4'));

describe('Dealer', function() {
  var dealer = new Dealer(currentPlayers, correctSequenceDeck());

  it("exists", function(){
    expect(dealer).toBeDefined();
  });

  describe('is initialized with', function() {

    it("an array of the current players", function() {
      expect(dealer.currentPlayers).toBeDefined();
    });

    it("a deck", function() {
      expect(dealer.deck).toBeDefined();
    });
  });
});
