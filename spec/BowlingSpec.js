describe('BowlingScoreboard', function() {
  var bowlingScoreboard = new BowlingScoreboard();
  var mockRoll = jasmine.createSpyObj('mockRoll', ['getRandomRoll'])

  beforeEach( function() {
    mockRoll = {
      getRandomRoll: function(value) {
        var randomRoll;
        mockRoll.randomRoll = value;
      }
    }
  });

  describe('in a single frame', function() {

    it('should get a score for a roll', function() {

      mockRoll.getRandomRoll(1);
      bowlingScoreboard.getRollScore(mockRoll);
      expect(bowlingScoreboard.rollScore).toEqual(1);

    });

  }); 

});