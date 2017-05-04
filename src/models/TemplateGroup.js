module.exports = function (connection, mongoose, mongoBuildArguments) {
  let TemplateGroupSchema = new mongoose.Schema( {
    name: { type: String, required: true, unique: true },
    templates: [mongoBuildArguments.CellsTemplateDefinition.schema],
    inactiveSince: { type: Date }
  })

  TemplateGroupSchema.methods.buildPublicJSON = function (minimalisticExport) {
    return {
      name: this.name,
      templates: this.templates.map(templateDefinition => templateDefinition.buildPublicJSON)
    }
  }

  mongoBuildArguments.TemplateGroup = connection.model('TemplateGroup', TemplateGroupSchema)
}

