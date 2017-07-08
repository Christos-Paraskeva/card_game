describe('Player', function() {
  var player = new Player('Test Name', 1);

  it("exists", function(){
    expect(player).toBeDefined();
  });

  describe('default values on initialization', function() {

    it("has a name", function(){
      expect(player.name).toEqual('Test Name');
    });

    it("has an id", function(){
      expect(player.id).toEqual(1);
    });
  });
});
