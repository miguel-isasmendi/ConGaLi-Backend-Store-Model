module.exports = function (connection, mongoose, mongoBuildArguments) {
  let CellsTemplateDefinitionSchema = new mongoose.Schema( {
    name: { type: String, required: true, unique: true },
    imgSrc: { type: String, required: true },
    attribution: { type: String },
    details: { type: String },
    points: [mongoose.Schema.Types.Mixed],
    inactiveSince: { type: Date }
  })

  CellsTemplateDefinitionSchema.methods.buildPublicJSON = function (minimalisticExport) {
    return {
      name: this.name,
      imgSrc: this.imgSrc,
      attribution: this.attribution,
      details: this.details,
      points: this.points.slice(0)
    }
  }

  mongoBuildArguments.CellsTemplateDefinition = connection.model('CellsTemplateDefinition', CellsTemplateDefinitionSchema)
}
