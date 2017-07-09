describe('Deck', function() {
  var deck = new Deck();

  it("exists", function(){
    expect(deck).toBeDefined();
  });

  describe('is initialized with', function() {

    it("an array with all the different names for the cards", function(){
      expect(deck.names).toEqual(cardNames());
    });

    it("an array with all the different suits for the cards", function(){
      expect(deck.suits).toEqual(suits());
    });

    it("an empty array of cards", function(){
      expect(deck.cards).toEqual([]);
    });
  });

  describe('when creating a deck', function() {

    it("the desired sequence of cards is correct", function() {
      expect(formatArrayStructure(deck.createDeck())).toEqual(formatArrayStructure(correctSequenceDeck()));
    });
  });
});
