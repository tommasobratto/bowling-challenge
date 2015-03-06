var BowlingScoreboard = function() {
this.rollScore = [];
this.totalScore;
};

BowlingScoreboard.prototype.getRollScore = function(roll) {
  if(this.rollScore.length != 3)
  this.rollScore.push(roll.randomRoll);
};

BowlingScoreboard.prototype.sumRolls = function() {
  this.totalScore = this.rollScore.reduce( function(result, element) {
    return result + element
});

};