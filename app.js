import express from 'express'

const app = express()
const port = 8080

//NRS-1: Implement hello world API
app.get('/api/hello', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Server has started on ${port}`)
})
