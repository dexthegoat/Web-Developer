const express = require('express')

const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded())

app.use(bodyParser.json())

app.get('/first', (req, res) => {
  res.send('Hello Ajax!')
})

app.get('/res', (req, res) => {
  res.send({'name': 'jsy'})
})

app.get('/get', (req, res) => {
  res.send(req.query)
})

app.post('/post', (req, res) => {
  res.send(req.body)
})

app.post('/json', (req, res) => {
  res.send(req.body)
})

app.get('/readyState', (req, res) => {
  res.send('hello')
})

app.get('/error', (req, res) => {
  // 500 internal server error
  // 400 服务器返回的结果不是预期的
  res.status(400).send('Not OK')
})

app.get('/cache', (req, res) => {
  fs.readFile('./test.txt', (error, result) => {
    res.send(result)
  })
})

app.listen(3000)
console.log('server started successfully')
