function PlayerDouble(id, name) {
  this.id = id;
  this.name = name;
  this.cardsHeld = [];
}

PlayerDouble.prototype = {
  createPlayer: function() {
    return new Player();
  }
};

var currentPlayersDouble = [];

currentPlayersDouble.push(new PlayerDouble(1, 'Player1'),
  new PlayerDouble(2, 'Player2'),
  new PlayerDouble(3, 'Player3'),
  new PlayerDouble(4, 'Player4'));

function DeckDouble() {
  this.cards = ['card 1', 'card 2', 'card 3', 'card 4'];
}

DeckDouble.prototype = {
  createDeck: function () {
    return this.cards;
  }
};

function DealerDouble() {
  this.currentPlayers = [];
  this.currentDeck = [];
}

DealerDouble.prototype = {
  dealCards: function (howManyCards, players, deck) {
    this.currentPlayers = players;
    this.currentDeck = deck;
  }
};

var playerDouble = new PlayerDouble();
var deckDouble = new DeckDouble();
var dealerDouble = new DealerDouble();

describe('AppController', function() {
  var appController = new AppController(playerDouble, deckDouble, dealerDouble);

  it("exists", function(){
    expect(appController).toBeDefined();
  });

  describe('is initialized with', function() {

    it("an empty array for current dock", function() {
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

    it("an instance of 'Dealer'", function(){
      expect(appController.dealer instanceof DealerDouble).toBe(true);
    });
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

  describe('when dealing cards out', function() {

    beforeEach(function(){
      appController.currentPlayers = currentPlayersDouble;
      appController.currentDeck = appController.deck.createDeck();
    });

    afterEach(function(){
      appController.currentPlayers = [];
    });

    it("calls the Dealer class to deal out the cards and tells it how many cards each", function() {
      var dealCardsToPlayersSpy = spyOn(appController.dealer, 'dealCards').and.callThrough();
      appController.dealCardToPlayers(1);
      expect(dealCardsToPlayersSpy).toHaveBeenCalled();
    });

    it("gives the Dealer the current players", function() {
      appController.dealCardToPlayers(1);
      expect(appController.dealer.currentPlayers).toEqual(currentPlayersDouble);
    });

    it("gives the Dealer the current deck", function() {
      appController.dealCardToPlayers(1);
      expect(appController.dealer.currentDeck).toEqual(appController.currentDeck);
    });
  });

  describe('when creating a new deck', function() {

    it("adds the new deck to the currentDeck array", function() {
      appController.createNewDeck('standard');
      expect(appController.currentDeck.length).toEqual(4);
    });

    it("calls the Deck class to create a new standard deck", function() {
      createDeckSpy = spyOn(appController.deck, 'createDeck').and.callThrough();
      appController.createNewDeck('standard');
      expect(createDeckSpy).toHaveBeenCalled();
    });
  });

  it("can show how many current players there are", function(){
    appController.addPlayer();
    appController.addPlayer();
    expect(appController.currentPlayerCount()).toEqual(2);
  });

  it("can show the current deck of cards in use", function(){
    expect(appController.showCurrentDeck()).toEqual(['card 1', 'card 2', 'card 3', 'card 4']);
  });

});
