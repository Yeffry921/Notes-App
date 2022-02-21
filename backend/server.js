const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const connectDB = require('./config/database')

app.use(express.static('public'))
app.use('/api/notes', require('./routes/noteRoutes'))

connectDB()

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})