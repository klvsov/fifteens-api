const express = require('express');
const scoreController = require('../controllers/ScoreController');

const router = express.Router();

router.get('/api/scores', scoreController.getBestScores);
router.post('/api/scores', scoreController.createScore);

module.exports = router;
