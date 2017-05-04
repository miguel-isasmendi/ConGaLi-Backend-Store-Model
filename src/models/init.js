const uuid = require('node-uuid')
const moment = require ('moment')
const path = require('path')
const logger = require('log4js').getLogger('Models Initializator')

function createModels ( connection, mongoose, normalizedPath ) {
  logger.debug(`Creating Models...`)
  
  let mongoBuildArguments = {}
  require(path.join(normalizedPath, 'CellsGrid'))(connection, mongoose, mongoBuildArguments)
  logger.debug(`Models created so far: ${JSON.stringify(mongoBuildArguments)}`)

  require(path.join(normalizedPath, 'CellsTemplateDefinition'))(connection, mongoose, mongoBuildArguments)
  require(path.join(normalizedPath, 'ConwaysGame'))(connection, mongoose, mongoBuildArguments)
  require(path.join(normalizedPath, 'TemplateGroup'))(connection, mongoose, mongoBuildArguments)
}

module.exports = aConfig => require('../store/mongoDBConnector')(aConfig, createModels)
