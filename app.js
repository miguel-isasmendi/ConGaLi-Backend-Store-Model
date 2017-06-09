const restify = require('restify')
const processModule = require('process')
const logger = require('log4js').getLogger('Main App')

let programArgs = require('commander')

programArgs
  .version('0.0.1')
  .option('-e, --environment [String]', 'Environment option ["dev", "prod"]("prod" is the default and fallback configuration)')
  .parse(processModule.argv)

let configFileName = ''

switch (programArgs.environment) {
  case 'dev':
    configFileName = 'dev'
    logger.info('Building development config...')
    break;
  default:
    configFileName = 'prod'
    logger.info('Building production config...')
}

const config = require(`./config/config.${configFileName}`)

logger.info('Configuration read:')
logger.info(JSON.stringify(config))

logger.info('Starting App...')

let allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
}

const server = restify.createServer()

server.use(allowCrossDomain)

server.use((req, res, next) => {
  res.contentType = 'application/json'
  next()
})

require('./src/dao/init')(config.mongoConfig)
require('./src/resource/init')(config, server)

server.listen(
    config.port,
    () => {
        logger.info(`Listening with PID ${processModule.pid} on port ${config.port}`)
        logger.info(`This platform is ${processModule.platform}`)
    }
);
