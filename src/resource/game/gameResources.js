const logger = require('log4js').getLogger('Game resources initializator')

function updateGame (req, res, next) {
  res.send(200)

  return next()
}

function createGame (req, res, next) {
  // TODO set Location to new resource
  // res.setHeader('location', resourcePath)
  res.send(201)

  return next()
}

function getGames (req, res, next) {
  res.send(200, {data: [{id:'asd', asdf:'asdf'}]})

  return next()
}

function getGame (req, res, next) {
  res.send(200, {data: {id:'asd', asdf:'asdf'}})

  return next()
}

function createCommand (req, res, next) {
  res.send(201)

  return next()
}

function getCommands (req, res, next) {
  res.send(200, {data: {id: 'asdf'}})

  return next()
}

module.exports = (aConfig, aServer) => {
  logger.debug('Adding handlers...')

  aServer.get('/game', getGames)
  aServer.put('/game', createGame)
  aServer.get('/game/{id}', getGame)
  aServer.post('/game/{id}', getGame)
  aServer.put('/game/{id}/command', createCommand)
  aServer.get('/game/{id}/command', getCommands)
}