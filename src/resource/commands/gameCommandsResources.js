const logger = require('log4js').getLogger('Game commands resources initializator')
const path = require('path')

class ConwaysGameResourceProvider {
  constructor (aDAOsMap) {
    this.gameCommandsDAO = aDAOsMap.GameCommandsDAO
  }

  createGameCommand (req, res, next) {
    this.gameCommandsDAO.saveGameCommand(
      {
        gameId: req.params.gameId,
        type: req.body.type,
        data: req.body.data
      },
      (err, newCommand) => {
        if (!err) {
          res.setHeader('location', path.join(req.path(), newCommand._id.toString()))
          res.send(201, {data: newCommand.buildPublicJSON()})
        } else {
          res.send(500)
        }

        next()
      }
    )
  }

  getCommands (req, res, next) {
    this.gameCommandsDAO.getGameCommands(
      { gameId: req.params.gameId },
      (err, commands) => {
        res.send(err ? 500 : 200, {data: commands.map(command => command.buildPublicJSON())})
        next()
      }
    )
  }
}

module.exports = (aConfig, aServer, aDAOsMap) => {
  logger.debug('Adding Game commands handlers...')
  let resourceProvider = new ConwaysGameResourceProvider(aDAOsMap)

  aServer.put('/game/:gameId/command', (req, res, next) => resourceProvider.createGameCommand(req, res, next))
  aServer.get('/game/:gameId/command', (req, res, next) => resourceProvider.getCommands(req, res, next))

  logger.debug('Done adding Game commands handlers...')
}
