const express = require('express')
const router = express.Router()
const Note = require('../models/noteModel')

// GET ALL RESOURCES
router.get('/', (req, res) => {
  Note.find({})
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((error) => {
      console.log(error)
    })
})

// GET A SINGLE RESOURCE
router.get('/:id', (req, res) => {
  Note.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((error) => {
      console.log(error)
    })
})

// CREATE A RESOURCE
router.post('/', async (req, res) => {
  const body = req.body
  
  const note = await Note.create({
    content: body.content,
    completed: body.completed
  })

  res.status(200).json(note)
})

// UPDATE A RESOURCE
router.put('/:id', (req, res) => {
 
  Note.findByIdAndUpdate(req.params.id, { completed: !req.body.completed }, { new: true })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((error) => {
      console.log(error)
    })
})

// DELETE A RESOURCE
router.delete('/:id', (req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((error) => {
      console.log(error)
    })
})

module.exports = router