const scoreController = require('../controllers/ScoreController');

const routes = [
  {
    method: 'GET',
    url: '/api/scores',
    handler: scoreController.getBestScores,
  },
  {
    method: 'POST',
    url: '/api/scores',
    handler: scoreController.createScore,
  },
];

module.exports = routes;
