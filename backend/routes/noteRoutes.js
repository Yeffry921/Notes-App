const express = require('express')
const router = express.Router()
const Note = require('../models/noteModel')

// GET ALL RESOURCES
router.get('/', (req, res) => {
  Note.find({})
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      console.log(error)
    })
})

// GET A SINGLE RESOURCE
router.get('/', (req, res) => {
  Note.findById(req.params.id)
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      console.log(error)
    })
})

// CREATE A RESOURCE
router.post('/', (req, res) => {
  
})

// UPDATE A RESOURCE
router.put('/:id', (req, res) => {
  
})

// DELETE A RESOURCE
router.delete('/:id', (req, res) => {
  
})

module.exports = router