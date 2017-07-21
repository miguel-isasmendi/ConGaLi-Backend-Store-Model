const logger = require('log4js').getLogger('Game resources initializator')
const path = require('path')

class ConwaysGameResourceProvider {
  constructor (aDAOsMap) {
    this.gameDAO = aDAOsMap.ConwaysGameDAO
  }

  updateGame (req, res, next) {
    res.send(200)

    return next()
  }

  createGame (req, res, next) {
    this.gameDAO.createGame(
      req.body,
      (err, newGame) => {
        if (!err) {
          res.setHeader('location', path.join(req.path(), newGame._id.toString()))
          res.send(201, {data: newGame.buildPublicJSON()})
        } else {
          res.send(500)
        }

        next()
      }
    )
  }

  getGames (req, res, next) {
    this.gameDAO.getAllGames(
      {},
      (err, games) => {
        res.send(err ? 500 : 200, {data: games.map(game => game.buildPublicJSON())})
        next()
      }
    )
  }

  getGame (req, res, next) {
    this.gameDAO.getGame(
      {id: req.params.gameId},
      (err, game) => {
        res.send(err ? 500 : 200, {data: game.buildPublicJSON()})
        next()
      }
    )
  }
}

module.exports = (aConfig, aServer, aDAOsMap) => {
  logger.debug('Adding Conway\'s Game handlers...')
  let resourceProvider = new ConwaysGameResourceProvider(aDAOsMap)

  aServer.get('/game', (req, res, next) => resourceProvider.getGames(req, res, next))
  aServer.put('/game', (req, res, next) => resourceProvider.createGame(req, res, next))
  aServer.get('/game/:gameId', (req, res, next) => resourceProvider.getGame(req, res, next))
  aServer.post('/game/:gameId', (req, res, next) => resourceProvider.updateGame(req, res, next))

  logger.debug('Done adding Conway\'s Game handlers...')
}
