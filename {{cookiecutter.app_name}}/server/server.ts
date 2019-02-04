import * as express from 'express';
import { join } from 'path';
import testRouter from './routes/route.test';

const app = express();

// Express config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(join(__dirname, 'public')));

// Express routers
app.use('/api/v1', testRouter);

// Express middleware to set reponse header
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Express send error if unable to route
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Unable to route');
});

const port = process.env.NODE_ENV === 'production' ? process.env.NODE_SERVER_PORT : '{{cookiecutter.dev_server_port}}';

app.listen(port, () => {
  console.log('Server Started at http://localhost:' + port);
});
