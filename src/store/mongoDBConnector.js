/** 
 * Module responsible for the persistence layer of the microservice.
 */
const logger = require('log4js').getLogger('MongoDB Connector')
const fs = require( 'fs' )
const path = require( 'path' )
const moment = require( 'moment' )

/* Special vars*/
const mongoose = require( 'mongoose' )
const ObjectId = mongoose.Types.ObjectId

mongoose.Promise = global.Promise

/* Functions */

function constructDB ( mongoConfig, modelCreationFunction ) {

  let dbUri = `mongodb://${mongoConfig.host}/${mongoConfig.dbName}`

  logger.debug(`Creating connection to ${dbUri}`)
  let connection = mongoose.createConnection(dbUri)
  let db = connection.db
  
  // When successfully connected
  connection.on( 'connected',
    () => {  
      logger.debug( `Mongoose connection open to ${dbUri}`);
      createModels( connection, mongoConfig.modelsFolderName, modelCreationFunction )
    }
  )

  // If the connection throws an error
  connection.on( 'error', err => logger.debug(`Mongoose connection error: ${err}`))

  // When the connection is disconnected
  connection.on( 'disconnected', () => logger.debug('Mongoose disconnected'))

  // If the Node process ends, close the Mongoose connection 
  process.on('SIGINT', () => {  
    connection.close(
      () => { 
        logger.debug('Mongoose disconnected through app termination') 
        process.exit(0) 
    })
  })

  return { db: db, connection: connection }
}

/*
* This function returns an ObjectId embedded with a given datetime
* Accepts both Date object and string input
*/
function objectIdWithTimestamp (timestamp) {
  // Convert string date to Date object (otherwise assume timestamp is a date)
  if ( typeof( timestamp ) == 'string' )
    timestamp = moment.utc( timestamp );

  // Convert date object to hex seconds since Unix epoch
  let hexSeconds = Math.floor(timestamp / 1000).toString(16)

  // Create an ObjectId with that hex timestamp

  let constructedObjectId = new ObjectId( hexSeconds + '0000000000000000' )

  logger.debug(`Returning a new ObjectId('${constructedObjectId}') with Timestamp: ${constructedObjectId.getTimestamp().toISOString()}`)

  return constructedObjectId
}

function createModels (connection, modelsFolderName, modelCreationFunction) {

  let normalizedPath = path.join(__dirname, modelsFolderName)

  try {
    fs.accessSync( normalizedPath, fs.W_OK )
  } catch ( error ) {
    logger.info(`Models directory doesn't exist, creating: ${normalizedPath}`)
    fs.mkdirSync(normalizedPath, 0744)
  }

  logger.debug('Creating DB models...')

  modelCreationFunction(connection, mongoose, normalizedPath)

  logger.debug('Done!')
}

function createDirectoryPath (aPath) {
  let pathElements = aPath.split('/')

  if (pathElements[0] === '.') {
    pathElements = pathElements.slice(1)
  }

  let accumulativePath = ''

  for (let i = 0; i < pathElements.length; i++) {
    accumulativePath = path.join(i === 0 ? './' : '', accumulativePath, pathElements[i])

    try {
      fs.accessSync(accumulativePath, fs.W_OK);
    } catch (e) {
      logger.info(`Directory doesn't extist, creating: ${accumulativePath}`)
      fs.mkdirSync(accumulativePath, 0744)
    }    
  }
}

module.exports = function ( aConfig, aModelCreationFunction) {
  
  createDirectoryPath(`./data/${aConfig.dbName}`)
  createDirectoryPath(`./log/${aConfig.dbName}`)

  let returnedExports = constructDB( aConfig, aModelCreationFunction )

  returnedExports.ObjectId = ObjectId
  returnedExports.objectIdWithTimestamp = objectIdWithTimestamp

  return returnedExports
}