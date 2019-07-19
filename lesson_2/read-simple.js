//reading a file in Node js
const fs = require('fs'); 
fs.readFile('target.txt', function (err, data) { //error reporting
	if (err) { 
		throw err;
	}
  	console.log(data.toString());
});