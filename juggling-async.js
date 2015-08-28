//Approach sin objetos, pero si con arreglos
/*
  var http = require('http')
  var bl = require('bl')
  var results = []
  var count = 0

  function printResults () {
    for (var i = 0; i < 3; i++)
      console.log(results[i])
  }

  function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)

        results[index] = data.toString()
        count++

        if (count == 3)
          printResults()
      }))
    })
  }

  for (var i = 0; i < 3; i++)
    httpGet(i)
*/
//Approach con objetos javascript

var http = require('http');
var bl = require('bl');

var limit = 3;
var urlObj = {
  ob1: new getData(process.argv[2]),
  ob2: new getData(process.argv[3]),
  ob3: new getData(process.argv[4])
}

var urlTracked = 0;

function getData(url) {
  var u = this;
  u.url = url;
  u.contents = '';
  var events = {
    "data": function(data) { u.contents += data; },
    "end": function() { callbackEnd(); }
  }

  var callbackEnd = function() {
    urlTracked++;
    if(urlTracked === limit) {
      for (i in urlObj) {
        console.log(urlObj[i].contents);
      }
    }
  };

  http.get(url, function(response) {
    for (key in events) {
        response.on(key, events[key]);
    };
  });
}  
