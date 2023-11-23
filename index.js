const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const scoreRouter = require('./routes/ScoreRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;
const mongoDBUri = process.env.MONGODB_URI;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(mongoDBUri);
const con = mongoose.connection;
app.use(express.json());
try {
  con.on('open', () => {
    console.log('connected');
  });
} catch (error) {
  console.log('Error: ' + error);
}

app.use('/', scoreRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
