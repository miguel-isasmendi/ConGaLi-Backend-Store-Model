const logger = require('log4js').getLogger('Cell\'s Templates DAO')

class CellsTemplatesDAO {
  constructor (dbConnectorData) {
    this.dbConnectorData = dbConnectorData
    this.ConwaysGame = this.dbConnectorData.models.ConwaysGame
    this.TemplateGroup = this.dbConnectorData.models.TemplateGroup
  }

  getGameTemplates (searchConfig, callback) {
    this.ConwaysGame.findOne(
      {_id: searchConfig.id},
      (error, game) => {
        let templates = null

        if (game) {
          templates = game.presetConfigurations
        }

        callback(error, templates)
      }
    )
  }

  getTemplates (searchConfig, callback) {
    this.TemplateGroup.find({}, callback)
  }
}

module.exports = (dbConnectorData, aDAOsMap) => {
  logger.debug(`Exporting Cell's Templates DAO`)
  aDAOsMap.CellsTemplatesDAO = new CellsTemplatesDAO(dbConnectorData)
}
