describe('GameController', function() {
  var gameController = new GameController();

  it("exists", function(){
    expect(gameController).toBeDefined();
  });

  describe('is initialized with', function() {

    it("an emptry array for current dock", function() {
      expect(gameController.currentDeck).toEqual([]);
    });

    it("an empty array for the current players", function() {
      expect(gameController.currentPlayers).toEqual([]);
    });

    it("an instance of 'Player'", function(){
      expect(gameController.player instanceof Player).toBe(true);
    });

    describe('when adding a player', function() {

      beforeEach(function(){
        gameController.currentPlayers = [];
      });

      it("calls the player class to create a new player", function() {
        var createPlayerSpy = spyOn(gameController.player, 'createPlayer').and.callThrough();
        gameController.addPlayer('Player Name');
        expect(createPlayerSpy).toHaveBeenCalled();
      });

      it("adds new player to the currentPlayers array", function() {
        gameController.addPlayer('Player Name');
        expect(gameController.currentPlayers.length).toEqual(1);
      });
    });
  });
});
