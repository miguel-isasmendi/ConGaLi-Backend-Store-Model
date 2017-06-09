module.exports = function (connection, mongoose, globalModelContainer) {
  let ConwaysGameSchema = new mongoose.Schema( {
    ownerId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    refreshInterval: { type: Number, min: 10, max: 9999999 },
    users: [mongoose.Schema.Types.Mixed],
    cellsGrids: [globalModelContainer.CellsGrid.schema],
    presetConfigurations: [globalModelContainer.CellsTemplateDefinition.schema]
  })

  ConwaysGameSchema.methods.buildPublicJSON = function (minimalisticExport) {
    return {
      name: this.name,
      ownerId: this.ownerId,
      refreshInterval: this.refreshInterval,
      users: this.users,
      cellsGrids: this.cellsGrids.map(cellGrid => cellGrid.buildPublicJSON()),
      presetConfigurations: 
    }
  }

  globalModelContainer.ConwaysGame = connection.model('ConwaysGame', ConwaysGameSchema)
}
