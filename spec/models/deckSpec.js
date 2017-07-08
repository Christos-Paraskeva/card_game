describe('Deck', function() {
  var deck = new Deck();

  it("exists", function(){
    expect(deck).toBeDefined();
  });

  describe('is initialized with', function() {

    it("an array with all the names of the cards", function(){
      expect(deck.names).toEqual(cardNames());
    });
  });
});
