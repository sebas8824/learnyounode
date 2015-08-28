var fs = require('fs');
var path = require('path');

//La expresion module.exports se encarga de exportar la funcion como 
//objeto en la variable instanciada de make-it-modular.js para ser usado
//como tal.
module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, files) {	
		if(err) return callback(err);
		var ffl = files.filter(function (file) {
			return path.extname(file) === '.'+ext;
		});
		//Este callback se usa para informar que el proceso funciono correctamente
		//Ya que tiene el parametro del error como null
		return callback(null, ffl);	
	});	
};