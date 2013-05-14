var http = require('http')
var cam = require('./foscam.js')

var port = process.env.PORT || 3010;

cam.setup({
  host: 'xx.xx.xx.xx',
  port: 81,
  user: 'admin',
  pass: ''
})

var server = http.createServer(function(req,res){
	console.log("Server initialized.")
	var videoStream = cam.videoStream()
	videoStream.pipe(res)
})