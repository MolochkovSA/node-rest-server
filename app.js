import express from 'express'

const app = express()
const port = 8080

//NRS-3: Request time by performance.now
app.use((req, res, next) => {
  req.start = performance.now()
  res.on('finish', () => {
    console.log(
      `Request time: ${(performance.now() - req.start).toFixed(3)} ms`
    )
  })
  next()
})

//NRS-2: Log request/respons
let resBody
app.use(function responseLogger(req, res, next) {
  const originalSendFunc = res.send.bind(res)
  res.send = function (body) {
    resBody = body
    return originalSendFunc(body)
  }
  next()
})
app.use((req, res, next) => {
  console.log(
    `Request:
  Method: ${req.method}
  URL: ${req.url}
  Headers: ${JSON.stringify(req.headers)}
  Query: ${JSON.stringify(req.query)}
  Body:  ${JSON.stringify(req.body)}
Respons:
  Code: ${res.statusCode}
  Headers: ${JSON.stringify(res.getHeaders())}
  Body: ${resBody}`
  )
  next()
})

//NRS-1: Implement hello world API
app.get('/api/hello', (req, res, next) => {
  res.send('Hello World')
  next()
})

app.listen(port, () => {
  console.log(`Server has started on ${port}`)
})
