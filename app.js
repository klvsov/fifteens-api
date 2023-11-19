const fastify = require('fastify');
const cors = require('@fastify/cors');

const db = require('./config/dbConnect');
const routes = require('./app/routes/ScoreRoutes');

const PORT = process.env.PORT || 3000;

const app = fastify({ logger: true });

app.register(db);
app.register(cors, {
  origin: '*',
});

routes.forEach((route) => {
  app.route(route);
});

const start = () => {
  app
    .listen({ port: PORT })
    .then((address) => {
      console.log(`server listening on ${address}`);
    })
    .catch((err) => {
      console.log({ err });
      process.exit(1);
    });
};

start();
