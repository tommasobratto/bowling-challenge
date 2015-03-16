var scoreBoard = new ScoreBoard();

scoreBoard.rollScores[0][0] = 1;
scoreBoard.rollScores[0][1] = 1;
scoreBoard.sumFrameScore();

$('#rollscore').html(scoreBoard.rollScores[0][0]);

$('#framescore').html(scoreBoard.frameScore);