const logger = require('log4js').getLogger('Models Initializator')

const path = require('path')

function createModels (connection, mongoose, normalizedPath, globalModelContainer) {
  logger.debug(`Creating Models...`)

  require(path.join(normalizedPath, 'CellsGrid'))(connection, mongoose, globalModelContainer)
  require(path.join(normalizedPath, 'CellsTemplateDefinition'))(connection, mongoose, globalModelContainer)
  require(path.join(normalizedPath, 'ConwaysGame'))(connection, mongoose, globalModelContainer)
  require(path.join(normalizedPath, 'TemplateGroup'))(connection, mongoose, globalModelContainer)

  logger.debug(`Models created so far: ${Object.keys(globalModelContainer)}`)
}

module.exports = createModels
