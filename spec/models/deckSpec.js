describe('Deck', function() {
  var deck = new Deck();

  it("exists", function(){
    expect(deck).toBeDefined();
  });

  describe('is initialized with', function() {

    it("an array with all the different names for the cards", function() {
      expect(deck.names).toEqual(cardNames());
    });

    it("an array with all the different suits for the cards", function() {
      expect(deck.suits).toEqual(suits());
    });

    it("an empty array of cards", function() {
      expect(deck.cards).toEqual([]);
    });
  });

  describe('when creating a deck', function() {

    beforeEach(function() {
      formattedDeck = formatArrayStructure(deck.createDeck('standard'));
    });

    it("card name is defined", function() {
      expect(formattedDeck[0][0]).toBeDefined();
    });

    it("card suit type is defined", function() {
      expect(formattedDeck[0][1]).toBeDefined();
    });

    it("card value is defined", function() {
      expect(formattedDeck[0][2]).toBeDefined();
    });

    it("original deck position of card is defined", function() {
      expect(formattedDeck[0][3]).toBeDefined();
    });

    it("the desired sequence of cards is in correct order", function() {
      expect(formattedDeck).toEqual(formatArrayStructure(correctSequenceDeck()));
    });

    it("correct number of cards are created", function(){
      expect(formattedDeck.length).toEqual(formatArrayStructure(correctSequenceDeck()).length);
    });
  });

  describe('edge cases', function() {

    it("throws an error a if valid type of deck isn't specified", function() {
      expect(deck.createDeck.bind(null)).toThrow(new Error("Must specify valid deck type"));
    });
  });
});
