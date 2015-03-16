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

  it('should be able to know if the frame score is a spare', function() {

    singleRoll.getScore(9);
    totalScore.addScore(singleRoll);
    singleRoll.getScore(1);
    totalScore.addScore(singleRoll);
    totalScore.sumFrameScore();
    expect(totalScore.spare).toBe(true);

  });

  it('should be able to know if the roll score is a strike', function() {

    singleRoll.getScore(10);
    totalScore.addScore(singleRoll);
    expect(totalScore.strike).toBe(true);

  });

  it('should know the last roll score', function() {

    singleRoll.getScore(1);
    totalScore.addScore(singleRoll);
    expect(totalScore.lastRoll).toEqual(1);

  });

  it('should know the last frame score', function() {

    singleRoll.getScore(1);
    totalScore.addScore(singleRoll);
    singleRoll.getScore(1);
    totalScore.addScore(singleRoll);
    totalScore.sumFrameScore();
    expect(totalScore.lastFrame).toEqual(2);

  });

});
