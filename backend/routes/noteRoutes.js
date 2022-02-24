const express = require('express')
const router = express.Router()
const { getAllNotes, getNote, setNote, updateNote, deleteNote } = require('../controllers/noteController')
// GET ALL RESOURCES
router.get('/', getAllNotes)

// GET A SINGLE RESOURCE
router.get('/:id', getNote)

// CREATE A RESOURCE
router.post('/', setNote)

// UPDATE A RESOURCE
router.put('/:id', updateNote)

// DELETE A RESOURCE
router.delete('/:id', deleteNote)

module.exports = router