const Score = require('../schemas/ScoreSchema');

exports.getBestScores = async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: 1 }).limit(10);
    res.json(scores);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createScore = async (req, res) => {
  try {
    const { user, score } = req.body;
    const newScore = new Score({ user, score });
    const savedScore = await newScore.save();
    res.json(savedScore);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
