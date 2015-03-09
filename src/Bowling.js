var BowlingScoreboard = function() {
  this.roundScoreArray = [];
  this.totalScoreArray = [];
  this.roundScore;
  this.totalScore
  this.spare;
};

BowlingScoreboard.prototype.getRollScore = function(roll) {
  if(this.roundScoreArray.length != 3)
    this.roundScoreArray.push(roll.randomRoll);
  this.roundScore = this.roundScoreArray.reduce( function(result, element) {
    return result + element 
  });
};

BowlingScoreboard.prototype.sumRolls = function() {
  if(this.totalScoreArray.length != 10)
    this.totalScoreArray.push(this.roundScore);
  this.totalScore = this.totalScoreArray.reduce( function(result, element) {
    return result + element
  });
};

BowlingScoreboard.prototype.getSpare = function(roll) {
  if(this.roundScore === 10)  
    this.spare = true;
};

BowlingScoreboard.prototype.resetRoundScore = function() {
  this.roundScore = 0;
  this.roundScoreArray.length = 0;
};