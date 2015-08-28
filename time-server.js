var net = require('net');
var server = net.createServer(function (socket) {
    var timestamp = parseStamp();
    socket.write(timestamp);
    socket.end();
});

server.listen(process.argv[2]);

function parseStamp () {
  var date = new Date();
  var od = [];
    od.year = addZero(date.getFullYear());
    od.month = addZero(date.getMonth()+1);
    od.day = addZero(date.getDate());
    od.hour = addZero (date.getHours());
    od.minute = addZero (date.getMinutes());
  return od.year +"-"+ od.month +"-"+  od.day +" "+ od.hour +":"+ od.minute +"\n";
}

function addZero(data) {
  var a = data.toString();
  if(a.length < 2) {
    a = "0" + a;
  }
  return a;
}
