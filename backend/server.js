const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const connectDB = require('./config/database')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/notes', require('./routes/noteRoutes'))

connectDB()

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.log(error)

  if(error.name === 'CastError') {
    return res.status(400).send({ error: 'Malformatted id' })
  }
  next(error)
}

// handler of requests with result to errors
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})