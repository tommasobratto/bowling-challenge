function resetMatchScore(bowlingScoreboard) {

  bowlingScoreboard.roundScoreArray.length = 0;
  bowlingScoreboard.totalScoreArray.length = 0;

};

function rollBall(bowlingScoreboard, mockRoll, number) {
  mockRoll.getRandomRoll(number);
  bowlingScoreboard.getRollScore(mockRoll);
};