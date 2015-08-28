var http = require('http');

//3rd party program
/*var bl = require('bl');

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data){
        if(err) {
          return console.log(data);
        } else {
          data = data.toString();
          console.log(data.length);
          console.log(data);
        }
    }));
});*/

//Solo codigo
var info = [];
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on("data", function(input) {
    info.push(input);
  });
  response.on("error",console.error);
  response.on("end",function() {
    console.log(info.join("").length);
    console.log(info.join(""));
  });
});
