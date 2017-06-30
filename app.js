const logger = require('log4js').getLogger('Main App')

const restify = require('restify')
const processModule = require('process')
const bodyParser = require('body-parser')

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

// parse application/x-www-form-urlencoded
 server.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
server.use(bodyParser.json())

require('./src/dao/init')(
  config.mongoConfig,
  server,
  (err, daoMap) => {
    if (!err) {
      require('./src/resource/init')(config, server, daoMap)
      logger.info('Done starting server, waiting for some action :)')
    }
  })

server.listen(
    config.port,
    () => {
        logger.info(`Listening with PID ${processModule.pid} on port ${config.port}`)
        logger.info(`This platform is ${processModule.platform}`)
    }
);
