const logger = require('log4js').getLogger('DAO Initializator')

module.exports = (aConfig, server, callback) => {
  logger.debug(`Delegating DAOs creation`)

  require('../store/mongoDBConnector')(
    aConfig,
    require('../models/init'),
    dbConnectorData => {
      let aDAOsMap = {}
      logger.debug(`Creating DAOs`)

      require('./ConwaysGameDAO')(dbConnectorData, aDAOsMap)

      logger.debug(`DAOs created: ${Object.keys(aDAOsMap)}`)

      return aDAOsMap
    },
    callback)
}
