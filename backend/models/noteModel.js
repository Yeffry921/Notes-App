const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  content: String,
  completed: Boolean,
})

module.exports = mongoose.model('Note', noteSchema)