//stream adventure - program 1
//console.log('beep boop')

//program 2 - redirect file to stdout

/*
var fs = require('fs')

fs.createReadStream(process.argv[2]).pipe(process.stdout)*/

//program 3 - redirect stdin to stdout

/*process.stdin.pipe(process.stdout)*/

//program 4 - transform stdin to something then send to stdout

/*var through = require('through')

var throughobj = through(function(buf) {
	this.queue(buf.toString().toUpperCase())
})

process.stdin.pipe(throughobj).pipe(process.stdout)*/

//program 5 - convert even and odd numbered lines

/*var split = require('split')
var through = require('through')
var count = 1
process.stdin.pipe(split())
.pipe(through(function (buf) {
	if (count % 2 == 0) {
		this.queue(buf.toString().toUpperCase()+'\n')
	}
	else {
		this.queue(buf.toString().toLowerCase()+'\n')
	}
	count += 1
})).pipe(process.stdout)*/

//program 6 - reverse stdin
/*
var concat = require('concat-stream')

process.stdin.pipe(concat(function (buf) {
	process.stdout.write(buf.toString().split('').reverse().join('')+'\n')
}))*/

//program 7 - http server that uppercases input
/*
var http = require('http')
var through = require('through')

var server = http.createServer(function handle(req, res) {
	req.pipe(through(function (data) {
		this.queue(data.toString().toUpperCase())
	}))
	.pipe(res)
})

server.listen(process.argv[2])*/

//program 8 - http client

/*
var request = require('request')

process.stdin.pipe(request.post('http://localhost:8000/')).pipe(process.stdout)*/

//program 9 - web sockets

/*var websocket = require('websocket-stream')
var stream = websocket('ws://localhost:8000')
stream.end('hello\n')*/

//program 10 - html stream

var trumpet = require('trumpet')
var fs = require('fs')
var through = require('through')

var trumpet = require('trumpet')
var through = require('through')
var tr = trumpet()

process.stdin.pipe()