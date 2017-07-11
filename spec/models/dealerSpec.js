function PlayerDouble(id, name) {
  this.id = id;
  this.name = name;
  this.cardsHeld = [];
}

var currentPlayersDouble = [];

currentPlayersDouble.push(new PlayerDouble(1, 'Player1'),
  new PlayerDouble(2, 'Player2'),
  new PlayerDouble(3, 'Player3'),
  new PlayerDouble(4, 'Player4'));

describe('Dealer', function() {
  var dealer = new Dealer();

  it("exists", function(){
    expect(dealer).toBeDefined();
  });

  describe('is initialized with', function() {

    it("an empty array for the current players", function() {
      expect(dealer.currentPlayers).toBeDefined();
    });

    it("an empty array for deck", function() {
      expect(dealer.deck).toBeDefined();
    });
  });

  describe('when dealing', function() {

    it("gives each player the correct amount of cards specified", function() {
      dealer.dealCards(7, currentPlayersDouble, correctSequenceDeck());
      expect(dealer.currentPlayers[0].cardsHeld.length).toEqual(7);
      expect(dealer.currentPlayers[1].cardsHeld.length).toEqual(7);
      expect(dealer.currentPlayers[2].cardsHeld.length).toEqual(7);
      expect(dealer.currentPlayers[3].cardsHeld.length).toEqual(7);
    });
  });
});
