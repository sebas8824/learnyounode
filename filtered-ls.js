//Codigo recomendado
var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {	
	list.forEach(function(file) {		
		if (path.extname(file) === '.' + process.argv[3])
		console.log(file)
	});
});

/*
Codigo creado
var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(directory, function callback(err, list){
	if (err) { 
		throw err; 
		console.log(err);
	} else {
		for(var i = 0; i < list.length; i++) {
			if(list[i].match(ext))
			console.log(list[i]);
		}
	}	
});*/