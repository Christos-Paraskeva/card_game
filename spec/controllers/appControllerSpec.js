describe('AppController', function() {
  var appController = new AppController();

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
      expect(appController.player instanceof Player).toBe(true);
    });

    it("an instance of 'Deck'", function(){
      expect(appController.deck instanceof Deck).toBe(true);
    });

    describe('when adding a player', function() {

      afterEach(function(){
        appController.currentPlayers = [];
      });

      it("calls the Player class to create a new player", function() {
        var createPlayerSpy = spyOn(appController.player, 'createPlayer').and.callThrough();
        appController.addPlayer('Player Name');
        expect(createPlayerSpy).toHaveBeenCalled();
      });

      it("adds the new player to the currentPlayers array", function() {
        appController.addPlayer('Player Name');
        expect(appController.currentPlayers.length).toEqual(1);
      });
    });
  });

  it("can show how many current players there are", function(){
    appController.addPlayer('Player Name');
    appController.addPlayer('Player2 Name');
    expect(appController.currentPlayerCount()).toEqual(2);
  });

  describe('when creating a new deck', function() {

    it("adds the new deck to the currentDeck array", function() {
      appController.createNewDeck('standard');
      expect(appController.currentDeck.length).toEqual(52);
    });

    it("calls the Deck class to create a new standard deck", function() {
      createDeckSpy = spyOn(appController.deck, 'createDeck').and.callThrough();
      appController.createNewDeck('standard');
      expect(createDeckSpy).toHaveBeenCalled();
    });


  });
});
