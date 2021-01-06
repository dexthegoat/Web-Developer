const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

// 静态资源访问服务器功能
app.use(express.static(path.join(__dirname, 'public')))

app.get('/first', (req, res) => {
  res.send('Hello Ajax')
})

app.get('/responseData', (req, res) => {
  res.send({"name": "zhangsan"})
})

app.get('/get', (req, res) => {
  res.send(req.query)
})

app.post('/post', (req, res) => {
  res.send(req.body)
})

app.listen(3000)

console.log('server started successfully')
