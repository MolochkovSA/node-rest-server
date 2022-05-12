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

//NRS-3: Request time by performance.mark
// app.use((req, res, next) => {
//   performance.mark('start')
//   res.on('finish', () => {
//     performance.mark('end')
//     performance.measure('perf', 'start', 'end')
//     console.log(
//       `Request time: ${performance
//         .getEntriesByName('perf')
//         .pop()
//         .duration.toFixed(3)} ms`
//     )
//   })
//   next()
// })

//NRS-2: log request/respons
app.use((req, res, next) => {
  console.log(`
Request:
  Method: ${req.method}
  URL: ${req.url}
  Headers: ${JSON.stringify(req.headers)}
  Query: ${JSON.stringify(req.query)}
  Body:  ${req.body || 'не указано'}
Respons:
  Code: ${res.statusCode}
  Headers: ${JSON.stringify(res.getHeaders())}
  Body: ${res.body || 'не указано'}`)
  // console.log(http.ServerResponse)
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
