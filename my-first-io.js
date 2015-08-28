var fs = require('fs');

//Codigo optimo
//Al usar utf8 dentro del constructor ya dejo de usar .toString()
var contents = fs.readFileSync(process.argv[2], 'utf8').split('\n').length-1;
console.log(contents);

//Codigo recomendado
/*var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length-1;
console.log(lines);*/

//Mi codigo
//var buf = fs.readFileSync('C:\\\\Users\\Sebastian\\package.json');
//var str = buf.toString();
//console.log(str.split('\\n').length);