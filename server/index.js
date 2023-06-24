var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/getemailplaceholder', function (req, res, next) {
  res.json({email: 'alister@gmial.com'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})