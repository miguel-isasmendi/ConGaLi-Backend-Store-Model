const logger = require('log4js').getLogger('DAO Initializator')

module.exports = aConfig => {
  logger.debug(`Delegating DAO models creation`)

  require('../store/mongoDBConnector')(aConfig, require('../models/init'))


}



(config.mongoConfig)
