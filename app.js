import express from 'express'
import { getHello } from './tasks/task01_hello.js'

const app = express()
const port = 8080

//task01_get hello world
app.use('/api', getHello)

app.listen(port, () => {
  console.log(`Server has started on ${port}`)
})
