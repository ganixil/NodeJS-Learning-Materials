"use strict"; //strict mode is a good idea of eliminate some problematic JS features
const
	fs = require('fs'),
	spawn = require('child_process').spawn,  //return child process module
	filename = process.argv[2];

if (!filename) {
	throw Error("A file to watch must be specified!");
}

fs.watch(filename, function() { 
	let 
		ls = spawn('ls', ['-lh', filename]),
		output = '';
	ls.stdout.on('data', function(chunk){ //EventEmitter
    	output += chunk.toString();
  	});
	ls.on('close', function(){ //EventEmitter
		let parts = output.split(/\s+/); console.dir([parts[0], parts[4], parts[8]]);
	});
});

console.log("Now watching " + filename + " for changes...");