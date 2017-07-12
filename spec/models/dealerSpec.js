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

function ShuffleDouble() {
}

ShuffleDouble.prototype = {
  defaultShuffle: function (deck) {
    deck.push('test');
  },
};

var shuffleDouble = new ShuffleDouble();

describe('Dealer', function() {
  var dealer = new Dealer(shuffleDouble);

  it("exists", function(){
    expect(dealer).toBeDefined();
  });

  describe('is initialized with', function() {

    it("an empty array for the current players", function() {
      expect(dealer.currentPlayers).toBeDefined();
    });

    it("an instance of 'Shuffle'", function(){
      expect(dealer.shuffle instanceof ShuffleDouble).toBe(true);
    });
  });

  describe('when shuffling the cards', function() {

    it("calls the shuffle class and gives it the cards", function() {
      var shuffleDeckSpy = spyOn(dealer.shuffle, 'defaultShuffle').and.callThrough();
      dealer.shuffleTheDeck(correctSequenceDeck());
      expect(shuffleDeckSpy).toHaveBeenCalled();
    });
  });

  describe('when dealing the cards', function() {

    it("gives each player the correct amount of cards specified", function() {
      dealer.dealTheCards(7, currentPlayersDouble, correctSequenceDeck());
      expect(dealer.currentPlayers[0].cardsHeld.length).toEqual(7);
      expect(dealer.currentPlayers[1].cardsHeld.length).toEqual(7);
      expect(dealer.currentPlayers[2].cardsHeld.length).toEqual(7);
      expect(dealer.currentPlayers[3].cardsHeld.length).toEqual(7);
    });

    describe("edge cases", function(){
      it("throws an error when there are not enough cards to be dealt to the players", function() {
        expect(dealer.dealTheCards.bind(null, 14, currentPlayersDouble, correctSequenceDeck())).toThrow(new Error("Cannot deal: not enough cards or players"));
      });
    });
  });
});
