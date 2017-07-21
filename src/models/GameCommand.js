module.exports = (connection, mongoose, globalModelContainer) => {
  let GameCommandSchema = new mongoose.Schema({
    type: { type: String, required: true },
    userId: { type: String, required: true },
    cellsGridIndex: { type: Number, required: true, default: 0 },
    game: [globalModelContainer.ConwaysGame.schema],
    data: { type: mongoose.Schema.Types.Mixed, required: true }
  })

  GameCommandSchema.methods.buildPublicJSON = function (minimalisticExport) {
    return {
      createdOn: this._id.getTimestamp(),
      type: this.type,
      data: this.data
    }
  }

  let gameTypes = {}

  gameTypes['CellAddition'] = 'CellAddition'
  gameTypes['CellRemoval'] = 'CellRemoval'
  gameTypes['GameStart'] = 'GameStart'
  gameTypes['GameEnd'] = 'GameStart'
  gameTypes['GamePause'] = 'GamePause'

  GameCommandSchema.gameTypes = gameTypes

  globalModelContainer.GameCommand = connection.model('GameCommand', GameCommandSchema)
}
