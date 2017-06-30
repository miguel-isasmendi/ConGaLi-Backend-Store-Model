const logger = require('log4js').getLogger('Cached Data DAO')

class ConwaysGameDAO {
  constructor (dbConnectorData) {
    this.dbConnectorData = dbConnectorData
    this.ConwaysGame = this.dbConnectorData.models['ConwaysGame']
  }

  removeConwaysGame (searchConfig, callback) {
    this.ConwaysGame.findOneAndRemove({'id': searchConfig.id}, callback)
  }

  updateConwaysGame (searchConfig, data, callback) {
    this.ConwaysGame
      .findOneAndUpdate(
        {id: data.id},
        data,
        callback
      )
  }

  getConwaysGame (searchConfig, callback) {
    this.ConwaysGame.findOne(
      {'id': searchConfig.id},
      callback
    )
  }

  getAllConwaysGames (searchConfig, callback) {
    this.ConwaysGame.find({}, callback)
  }
}

module.exports = (dbConnectorData, aDAOsMap) => {
  logger.debug(`Exporting Conway's Game DAO`)
  aDAOsMap.ConwaysGameDAO = new ConwaysGameDAO(dbConnectorData)
}
