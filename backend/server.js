const express = require('express')
// const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001


app.use(express.static('public'))
app.use('/api/notes', require('./routes/noteRoutes'))



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})