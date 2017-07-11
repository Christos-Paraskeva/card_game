function PlayerDouble() {
}

PlayerDouble.prototype = {
  createPlayer: function() {
    return new Player();
  }
};

function DeckDouble() {
  this.cards = ['card 1', 'card 2'];
}

DeckDouble.prototype = {
  createDeck: function () {
    return this.cards;
  }
};

var playerDouble = new PlayerDouble();
var deckDouble = new DeckDouble();

describe('AppController', function() {
  var appController = new AppController(playerDouble, deckDouble);

  it("exists", function(){
    expect(appController).toBeDefined();
  });

  describe('is initialized with', function() {

    it("an emptry array for current dock", function() {
      expect(appController.currentDeck).toEqual([]);
    });

    it("an empty array for the current players", function() {
      expect(appController.currentPlayers).toEqual([]);
    });

    it("an instance of 'Player'", function(){
      expect(appController.player instanceof PlayerDouble).toBe(true);
    });

    it("an instance of 'Deck'", function(){
      expect(appController.deck instanceof DeckDouble).toBe(true);
    });

    describe('when adding a player', function() {

      afterEach(function(){
        appController.currentPlayers = [];
      });

      it("calls the Player class to create a new player", function() {
        var createPlayerSpy = spyOn(appController.player, 'createPlayer').and.callThrough();
        appController.addPlayer();
        expect(createPlayerSpy).toHaveBeenCalled();
      });

      it("adds the new player to the currentPlayers array", function() {
        appController.addPlayer();
        expect(appController.currentPlayers.length).toEqual(1);
      });
    });
  });

  it("can show how many current players there are", function(){
    appController.addPlayer();
    appController.addPlayer();
    expect(appController.currentPlayerCount()).toEqual(2);
  });

  describe('when creating a new deck', function() {

    it("adds the new deck to the currentDeck array", function() {
      console.log(appController.createNewDeck('standard'));
      expect(appController.currentDeck.length).toEqual(2);
    });

    it("calls the Deck class to create a new standard deck", function() {
      createDeckSpy = spyOn(appController.deck, 'createDeck').and.callThrough();
      appController.createNewDeck('standard');
      expect(createDeckSpy).toHaveBeenCalled();
    });
  });

  // it("can show the current deck of cards in use", function(){
  //   expect(appController.createNewDeck('standard')).toEqual([])
  // });
});
