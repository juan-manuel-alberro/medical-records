import Logger from '../lib/logger';
let logger = new Logger('error');

module.exports = (req, res) => {
  logger.error(`404 | Not found on ${req.originalUrl}`);
  res.status(404).send('error');
}
