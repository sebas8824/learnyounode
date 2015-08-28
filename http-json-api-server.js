/*var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true),
      pathname = urlObj.pathname,
      strtime = urlObj.query.iso,
      result;

  if (pathname === '/api/unixtime') {
     result = getUnixTimestamp(strtime);
  } else if (pathname === '/api/parsetime') {
    result = getTimeObj(strtime);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(process.argv[2]);

function getUnixTimestamp(strtime) {
  return { unixtime: getTimestamp(strtime) };
}

function getTimestamp(strtime) {
  return Date.parse(strtime);
}

function getTimeObj(strtime) {
  var date = new Date(getTimestamp(strtime));
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}*/

//Codigo recomendado

var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time);
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time);

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
