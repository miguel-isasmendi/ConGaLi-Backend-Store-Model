module.exports = {
  port: process.env.PORT || 8087,
  mongoConfig: {
    'host' : 'congali-mongo:27017',
    'dbName' : 'LongTermModel',
    'modelsFolderName' : 'models'
  }
}
