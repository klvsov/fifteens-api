const Score = require('../schemas/ScoreSchema');

exports.getBestScores = async () => {
  try {
    const scores = await Score.find().sort({ score: 1 }).limit(10);
    return scores;
  } catch (error) {
    console.log({ error });
  }
};

exports.createScore = async (req) => {
  try {
    const { user, score } = req.body;
    const newScore = new Score({ user, score });
    const savedScore = newScore.save();
    return savedScore;
  } catch (error) {
    console.log({ error });
  }
};
