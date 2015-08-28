var mod = require('./module');

//callback(err, data) tiene dos parametros, y si es exitoso, se devuelve como null
//continuando el proceso de lectura de cada archivo contenido en la lista data.
mod(process.argv[2], process.argv[3], function callback(err, data) {
	if (err) return err;
	data.forEach(function (file) {
		console.log(file);
	});
});