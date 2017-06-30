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
    res.setHeader('location', path.join(req.path(), 'newResourceId'))
    res.send(201, {data: req.body})

    return next()
  }

  getGames (req, res, next) {
    this.gameDAO.getAllConwaysGames(
      {},
      (err, data) => {
        res.send(err ? 500 : 200, {data: data})
        next()
      }
    )
  }

  getGame (req, res, next) {
    this.gameDAO.getAllConwaysGames(
      {id: req.params.gameId},
      (err, data) => {
        res.send(err ? 500 : 200, {data: data})
        next()
      }
    )
  }

  createCommand (req, res, next) {
    res.send(201)

    return next()
  }

  getCommands (req, res, next) {
    res.send(200, {data: {id: req.params.gameId}})

    return next()
  }
}

module.exports = (aConfig, aServer, aDAOsMap) => {
  logger.debug('Adding Conway\'s Game handlers...')
  let resourceProvider = new ConwaysGameResourceProvider(aDAOsMap)

  aServer.get('/game', (req, res, next) => resourceProvider.getGames(req, res, next))
  aServer.put('/game', resourceProvider.createGame)
  aServer.get('/game/:gameId', resourceProvider.getGame)
  aServer.post('/game/:gameId', resourceProvider.getGame)
  aServer.put('/game/:gameId/command', resourceProvider.createCommand)
  aServer.get('/game/:gameId/command', resourceProvider.getCommands)

  logger.debug('Done adding Conway\'s Game handlers...')
}
