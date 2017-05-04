module.exports = function (connection, mongoose, mongoBuildArguments) {
  let ConwaysGameSchema = new mongoose.Schema( {
    ownerId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    refreshInterval: { type: Number, min: 10, max: 9999999 },
    users: [mongoose.Schema.Types.Mixed],
    cellsGrids: [mongoBuildArguments.CellsGrid.schema],
    presetConfigurations: [mongoBuildArguments.CellsTemplateDefinition.schema]
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

  mongoBuildArguments.ConwaysGame = connection.model('ConwaysGame', ConwaysGameSchema)
}
