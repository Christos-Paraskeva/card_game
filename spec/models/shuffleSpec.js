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

  describe('when shuffling', function(){
    it('the default shuffle method does not return any two cards in sequence', function(){
      expect(shuffle.defaultShuffle()).toEqual([ Object({ value: 1, name: 'Ace', suit: 'Hearts' }), Object({ value: 3, name: 'Three', suit: 'Hearts' }), Object({ value: 2, name: 'Two', suit: 'Hearts' }) ]);
      expect(shuffle.defaultShuffle()).toEqual([ Object({ value: 2, name: 'Two', suit: 'Hearts' }), Object({ value: 1, name: 'Ace', suit: 'Hearts' }), Object({ value: 3, name: 'Three', suit: 'Hearts' }) ]);
      expect(shuffle.defaultShuffle()).toEqual([ Object({ value: 3, name: 'Three', suit: 'Hearts' }), Object({ value: 2, name: 'Two', suit: 'Hearts' }), Object({ value: 1, name: 'Ace', suit: 'Hearts' }) ]);
      expect(shuffle.defaultShuffle()).not.toEqual([ Object({ value: 1, name: 'Ace', suit: 'Hearts' }), Object({ value: 2, name: 'Two', suit: 'Hearts' }), Object({ value: 3, name: 'Three', suit: 'Hearts' }) ]);
      expect(shuffle.defaultShuffle()).not.toEqual([ Object({ value: 2, name: 'Two', suit: 'Hearts' }), Object({ value: 3, name: 'Three', suit: 'Hearts' }), Object({ value: 1, name: 'Ace', suit: 'Hearts' }) ]);
      expect(shuffle.defaultShuffle()).not.toEqual([ Object({ value: 3, name: 'Three', suit: 'Hearts' }), Object({ value: 1, name: 'Ace', suit: 'Hearts' }), Object({ value: 2, name: 'Two', suit: 'Hearts' }) ]);
    });
  });
});
