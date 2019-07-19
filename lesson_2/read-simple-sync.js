const
	fs = require('fs'),
	data = fs.readFileSync('target.txt'); 
process.stdout.write(data.toString());
//This synchronous read will wait for code to execute, and block other code until it is finished