const logger = require('log4js').getLogger('Resources Initializator')

module.exports = (aConfig, aServer) => {
  logger.debug(`Delegating resources creation...`)
 
  require('./game/gameResources')(aConfig, aServer)
}