module.exports = (connection, mongoose, globalModelContainer) => {
  let CellsGridSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    maxWidth: { type: Number, min: 10, max: 999999, required: true },
    maxHeight: { type: Number, min: 10, max: 999999, required: true },
    resolution: { type: Number, min: 10, max: 999999, default: 10, required: true }
  })

  CellsGridSchema.methods.buildPublicJSON = function (minimalisticExport) {
    return {
      name: this.name,
      maxWidth: this.maxWidth,
      maxHeight: this.maxHeight,
      resolution: this.resolution,
      lastModDate: this.lastModDate.toUTCString()
    }
  }

  globalModelContainer.CellsGrid = connection.model('CellsGrid', CellsGridSchema)
}
