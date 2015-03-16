describe('TotalScore', function() {

  var totalScore = new TotalScore();
  var singleRoll = jasmine.createSpyObj('singleRoll', ['addScore']);

  beforeEach( function() {
    singleRoll = {
      getScore: function(value) {
        var score;
        singleRoll.score = value;
      }
    }
  });

  it('should be able to sum up two roll scores into a frame score', function() {

    singleRoll.getScore(1);
    totalScore.addScore(singleRoll);
    singleRoll.getScore(1);
    totalScore.addScore(singleRoll);
    totalScore.sumFrameScore();
    expect(totalScore.frameScore).toEqual(2);

  });

});