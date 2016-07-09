import { Router } from 'express';
import facets from './facets';
import Logger from '../lib/logger';

let logger = new Logger('index');

export default function() {
	var api = Router();

	// mount the facets resource
	api.use('/facets', facets);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		logger.info('retrieving home');
		res.json({
			version : '1.0'
		});
	});

	return api;
}
