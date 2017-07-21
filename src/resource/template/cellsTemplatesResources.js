const logger = require('log4js').getLogger('Cell\'s Template resources initializator')

class CellsTemplateResourceProvider {
  constructor (aDAOsMap) {
    this.gameDAO = aDAOsMap.ConwaysGameDAO
    this.templatesDAO = aDAOsMap.CellsTemplatesDAO
  }

  getTemplates (req, res, next) {
    this.templatesDAO.getTemplates(
      {},
      (err, templates) => {
        res.send(err ? 500 : 200, {data: templates})
        next()
      }
    )
  }

  getGameTemplates (req, res, next) {
    this.templatesDAO.getGameTemplates(
      {id: req.params.gameId},
      (err, templates) => {
        res.send(err ? 500 : 200, {data: templates})
        next()
      }
    )
  }
}

module.exports = (aConfig, aServer, aDAOsMap) => {
  logger.debug('Adding Cell\'s Templates handlers...')
  let resourceProvider = new CellsTemplateResourceProvider(aDAOsMap)

  aServer.get('/templates', (req, res, next) => resourceProvider.getTemplates(req, res, next))
  aServer.get('/game/:gameId/templates', (req, res, next) => resourceProvider.getGameTemplates(req, res, next))

  logger.debug('Done adding Cell\'s Templates handlers...')
}
