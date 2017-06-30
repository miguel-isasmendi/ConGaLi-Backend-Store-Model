const logger = require('log4js').getLogger('Resources Initializator')

module.exports = (aConfig, aServer, aDAOsMap) => {
  logger.debug(`Delegating resources creation...`)

  require('./game/gameResources')(aConfig, aServer, aDAOsMap)
}
