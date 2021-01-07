const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', {useNewUrlParser: true})
    .then(() => console.log('db connected'))
    .catch(error => console.log(error, 'fail connecting'))

// collection schema
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean
})
// create collection
const Course = mongoose.model('Course', courseSchema)

// create course instance
const course = new Course({
  name: 'node.js',
  author: 'jsy',
  isPublished: true
})

// store in db
course.save()
