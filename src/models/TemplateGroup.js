module.exports = function (connection, mongoose, globalModelContainer) {
  let TemplateGroupSchema = new mongoose.Schema( {
    name: { type: String, required: true, unique: true },
    templates: [globalModelContainer.CellsTemplateDefinition.schema],
    inactiveSince: { type: Date }
  })

  TemplateGroupSchema.methods.buildPublicJSON = function (minimalisticExport) {
    return {
      name: this.name,
      templates: this.templates.map(templateDefinition => templateDefinition.buildPublicJSON)
    }
  }

  globalModelContainer.TemplateGroup = connection.model('TemplateGroup', TemplateGroupSchema)
}

