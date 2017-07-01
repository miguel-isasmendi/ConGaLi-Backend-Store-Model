const logger = require('log4js').getLogger('Cached Data DAO')

class ConwaysGameDAO {
  constructor (dbConnectorData) {
    this.dbConnectorData = dbConnectorData
    this.ConwaysGame = this.dbConnectorData.models.ConwaysGame
  }

  createGame (gameData, callback) {
    let usersData = {}
    usersData[gameData.user.id] = {color: gameData.user.color}

    let newGame = new this.ConwaysGame({
      ownerId: Object.keys(usersData)[0],
      name: gameData.name,
      refreshInterval: gameData.refreshInterval,
      users: usersData
    })

    newGame.save(callback)
  }

  removeGame (searchConfig, callback) {
    this.ConwaysGame.findOneAndRemove({'id': searchConfig.id}, callback)
  }

  updateGame (searchConfig, data, callback) {
    this.ConwaysGame
      .findOneAndUpdate(
        {_id: data.id},
        data,
        callback
      )
  }

  getGame (searchConfig, callback) {
    this.ConwaysGame.findOne(
      {_id: searchConfig.id},
      callback
    )
  }

  getAllGames (searchConfig, callback) {
    this.ConwaysGame.find({}, callback)
  }
}

module.exports = (dbConnectorData, aDAOsMap) => {
  logger.debug(`Exporting Conway's Game DAO`)
  aDAOsMap.ConwaysGameDAO = new ConwaysGameDAO(dbConnectorData)
}
