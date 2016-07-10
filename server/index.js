import http from 'http';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import middleware from './middleware';
import db from './db';
import api from './api';
import Logger from './lib/logger';

var app = express();
app.server = http.createServer(app);

let logger = new Logger();

// 3rd party middleware
app.use(cors({
	exposedHeaders: ['Link']
}));

app.use(bodyParser.json({
	limit : '100kb'
}));

// connect to db
db( λ => {

	// internal middleware
	app.use(middleware());

	// api router
	app.use('/api', api());

  // FINALLY, use any error handlers
  app.use(require('./api/notFound'));

	app.server.listen(process.env.PORT || 8080);

  logger.info(`Started on port ${app.server.address().port}`);
});

export default app;
