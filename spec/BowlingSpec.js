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
      expect(bowlingScoreboard.rollScore).toEqual([1]);

    });

    it('should add up the roll scores', function() {

      bowlingScoreboard.rollScore.length = 0;
      mockRoll.getRandomRoll(2)
      bowlingScoreboard.getRollScore(mockRoll);
      mockRoll.getRandomRoll(4)
      bowlingScoreboard.getRollScore(mockRoll);
      bowlingScoreboard.sumRolls();
      expect(bowlingScoreboard.totalScore).toEqual(6);

    });

  }); 

});