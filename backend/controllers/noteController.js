const Note = require('../models/noteModel')

const getAllNotes = (req, res) => {
  Note.find({})
  .then((result) => {
    res.status(200).json(result)
  })
  .catch((error) => {
    console.log(error)
  })
}

const getNote = (req, res) => {
  Note.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((error) => {
      console.log(error)
    })
}

const setNote = (req, res) => {
  const body = req.body
  
  Note.create({
    content: body.content,
    completed: body.completed
  })
  .then((result) => {
    res.status(200).json(result)
  })
  .catch((error) => {
    console.log(error)
  })
}

const updateNote= (req, res) => {
  const body = req.body

  const changedNote = {
    content: body.content,
    completed: body.completed
  }

  Note.findByIdAndUpdate(req.params.id, changedNote, { new: true })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((error) => {
      console.log(error)
    })
}

const deleteNote = (req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((error) => {
      console.log(error)
    })
}

module.exports = { getAllNotes, getNote, setNote, updateNote, deleteNote }