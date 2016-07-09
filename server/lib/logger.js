let bole = require('bole');

bole.output({
  level: 'debug',
  stream: process.stdout
});

class Logger {
  constructor(opts = {}) {
    this.logger = require('bole')(opts.name || '');
  }

  info(message = '') {
    this.logger.info(message);
  }

  debug(message = '') {
    this.logger.debug(message);
  }

  warn(message = '') {
    this.logger.warn(message);
  }

  error(message = '') {
    this.logger.error(message);
  }
}

export default Logger;
