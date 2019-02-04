import * as express from 'express';

const testRouter = express.Router();

testRouter.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

testRouter.get('/test', (req, res) => {
  console.log('Called test');
  res.json('cookiecutter app get');
});

export default testRouter;
