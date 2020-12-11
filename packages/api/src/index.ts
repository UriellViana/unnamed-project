import * as express from 'express';
import { mongo } from './config';
import { env } from './helpers';
import * as middlewares from './middlewares';

const app = express();

app.locals.mongo = mongo;

app.use(middlewares.jwt);

middlewares.apollo(app);

app.use(function (err, _req, res, _next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'JWT Expired.' });
  }
  console.error('Error: ', err.name);
});

function start() {
  const EXPRESS_PORT = env.getOrThrow('EXPRESS_PORT');

  app.listen({ port: EXPRESS_PORT }, () =>
    console.info('🚀: api started on port ' + EXPRESS_PORT)
  );
}

start();
