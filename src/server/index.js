var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.resolve(__dirname,'public')))

app.get('/*',function(req,res){
  res.sendFile(path.resolve(__dirname,'public/index.html'))
})

var server = app.listen(3000)
