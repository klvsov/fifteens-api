const fastifyPlugin = require('fastify-plugin');
const mongoose = require('mongoose');

require('dotenv').config();

const mongoDBUri = process.env.MONGODB_URI;

// Connect to DB
async function dbConnector(fastify) {
  try {
    const db = await mongoose.connect(mongoDBUri);
    console.log('Database is connected');
    fastify.decorate('mongo', db);
  } catch (err) {
    console.log(err);
  }
}
module.exports = fastifyPlugin(dbConnector);
