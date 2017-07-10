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
  });
});
