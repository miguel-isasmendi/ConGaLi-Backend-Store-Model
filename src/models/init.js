const uuid = require('uuid')
const moment = require ('moment')
const path = require('path')
const logger = require('log4js').getLogger('Models Initializator')

function createModels ( connection, mongoose, normalizedPath, globalModelContainer ) {
  logger.debug(`Creating Models...`)

  require(path.join(normalizedPath, 'CellsGrid'))(connection, mongoose, globalModelContainer)
  logger.debug(`Models created so far: ${JSON.stringify(globalModelContainer)}`)

  require(path.join(normalizedPath, 'CellsTemplateDefinition'))(connection, mongoose, globalModelContainer)
  require(path.join(normalizedPath, 'ConwaysGame'))(connection, mongoose, globalModelContainer)
  require(path.join(normalizedPath, 'TemplateGroup'))(connection, mongoose, globalModelContainer)
}

module.exports = createModels