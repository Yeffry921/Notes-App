const Note = require('../models/noteModel')

const getAllNotes = async (req, res) => {
  try {
    const result = await Note.find({})
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
}

const getNote = async (req, res) => {
    try {
      const result = await Note.findById(req.params.id)
      res.status(200).json(result)
    } catch (error) {
      console.log(error)
    }
}

const setNote = async (req, res) => {
  try {
    const body = req.body
  
    const result = await Note.create({
      content: body.content,
      completed: body.completed
    })

    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
}

const updateNote= async (req, res) => {
  try {
    const body = req.body

    const changedNote = {
      content: body.content,
      completed: body.completed
    }
    const result = await Note.findByIdAndUpdate(req.params.id, changedNote, { new: true })
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
}

const deleteNote = async (req, res) => {
  try {
    const result = await Note.findByIdAndDelete(req.params.id)
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAllNotes, getNote, setNote, updateNote, deleteNote }