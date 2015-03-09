function resetMatchScore(bowlingScoreboard) {

  bowlingScoreboard.resetRoundScore();
  bowlingScoreboard.totalScoreArray.length = 0;
  bowlingScoreboard.totalScore = 0;

};

function rollBall(bowlingScoreboard, mockRoll, number) {
  mockRoll.getRandomRoll(number);
  bowlingScoreboard.getRollScore(mockRoll);
};