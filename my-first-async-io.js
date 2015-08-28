//Manejo de callbacks

var fs = require('fs');
//Codigo optimizado
var file = process.argv[2];

fs.readFile(file, 'utf8', function (err, contents) {
	var lines = contents.split('\n').length-1;
	console.log(lines);
});

//Codigo recomendado
/*var file = process.argv[2];

fs.readFile(file, function(err, contents) {
	var lines = contents.toString().split('\n').length-1;
	console.log(lines);
});*/

//Mi codigo
/*var length = undefined;

fs.readFile(process.argv[2], 'utf8', function(err, data){
	if(err) {
		return console.error(err);
	} else {
		length = data.split('\n').length-1;
		console.log(length);
	}
	
}); 
*/