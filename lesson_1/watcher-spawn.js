//you can run it by typing "node --harmony watcher-spawn.js target.txt"
//If you go to a different console and touch the target file, your Node program will produce something like this:
//-rw-r--r--  1 jimbo  staff     0B Dec 19 22:45 target.txt

"use strict"; //strict mode is a good idea of eliminate some problematic JS features
const
	fs = require('fs'),
	spawn = require('child_process').spawn,  //return child process module
	filename = process.argv[2];

if (!filename) {
	throw Error("A file to watch must be specified!");
}

fs.watch(filename, function() {
	let ls = spawn('ls', ['-lh', filename]); 
	ls.stdout.pipe(process.stdout);
});

console.log("Now watching " + filename + " for changes...");