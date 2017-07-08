describe('Card', function() {
  var card = new Card(1, 'Ace', 'Heart');

  it("exists", function(){
    expect(card).toBeDefined();
  });

  describe('is initialized with', function() {

    it("a value", function(){
      expect(card.value).toEqual(1);
    });

    it("a name", function(){
      expect(card.name).toEqual('Ace');
    });

    it("a suit", function(){
      expect(card.suit).toEqual('Heart');
    });
  });
});
