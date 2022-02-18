const express = require('express')
// const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001


app.use(express.static('public'))

// GET ALL RESOURCES
app.get('/api/notes', (req, res) => {
  
})

// GET A SINGLE RESOURCE
app.get('/api/notes/:id', (req, res) => {
  
})

// CREATE A RESOURCE
app.post('/api/notes', (req, res) => {
  
})

// UPDATE A RESOURCE
app.put('/api/notes/:id', (req, res) => {
  
})

// DELETE A RESOURCE
app.delete('/api/notes/:id', (req, res) => {
  
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})