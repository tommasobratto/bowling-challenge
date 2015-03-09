var BowlingScoreboard = function() {
  this.roundScoreArray = [];
  this.totalScore = [];
  this.roundScore = [];
};

BowlingScoreboard.prototype.getRollScore = function(roll) {
  if(this.roundScore.length != 3)
    this.roundScoreArray.push(roll.randomRoll);
    this.roundScore = this.roundScoreArray.reduce( function(result, element) {
    return result + element 
  });
};

BowlingScoreboard.prototype.sumRolls = function() {
  this.totalScore.push(this.roundScore);
};

BowlingScoreboard.prototype.getSpare = function() {
  if(this.roundScore === 10) 
    return true;
};