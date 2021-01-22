const express = require('express')

const path = require('path')
const app = express()
const bodyParser = require('body-parser')

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

app.listen(3000)
console.log('server started successfully')
