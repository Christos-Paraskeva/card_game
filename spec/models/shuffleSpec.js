describe('Shuffle', function() {
  var testDeck = minimizedTestDeck();
  var shuffle = new Shuffle(testDeck);

  it("exists", function() {
    expect(shuffle).toBeDefined();
  });

  describe('is initialized with', function() {
    it("the current deck of cards", function(){
      expect(shuffle.currentDeck).toEqual(testDeck);
    });
  });
});
