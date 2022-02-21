const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  content: String,
  status: String,
})

module.exports = mongoose.model('Note', noteSchema)