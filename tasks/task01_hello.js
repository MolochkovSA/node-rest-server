import express from 'express'

const getHello = express()

getHello.get('/hello', (req, res) => {
  res.send('Hello World')
})
getHello.get('/buy', (req, res) => {
  res.send('Buy World')
})

export { getHello }
