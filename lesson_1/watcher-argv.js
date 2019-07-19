//same as the old watcher but specify watch file
//you can run it by using "node --harmony watcher-argv.js target.txt"
const
fs = require('fs'),
filename = process.argv[2]; 
if (!filename) {
	throw Error("A file to watch must be specified!"); 
	}
fs.watch(filename, function() {
	console.log("File " + filename + " just changed!");
});
console.log("Now watching " + filename + " for changes...");
