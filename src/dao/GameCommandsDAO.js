const logger = require('log4js').getLogger('Game Commands DAO')

class GameCommandsDAO {
  constructor (dbConnectorData) {
    this.dbConnectorData = dbConnectorData
    this.ConwaysGame = this.dbConnectorData.models.ConwaysGame
    this.GameCommand = this.dbConnectorData.models.GameCommand
  }

  getGameCommands (searchConfig, callback) {
    this.GameCommand.find({'game.id': searchConfig.gameId})
      .sort({ _id: -1 })
      .exec(callback)
  }

  saveGameCommand (commandConfig, callback) {
    this.ConwaysGame.findOne(
      {_id: commandConfig.gameId},
      (error, game) => {
        if (error) {
          return callback(error)
        }

        let gameCommand = new this.GameCommand({
          game: game,
          type: commandConfig.type,
          data: commandConfig.data
        })

        gameCommand.save(callback)
      }
    )
  }
}

module.exports = (dbConnectorData, aDAOsMap) => {
  logger.debug(`Exporting Game Commands DAO`)
  aDAOsMap.GameCommandsDAO = new GameCommandsDAO(dbConnectorData)
}
