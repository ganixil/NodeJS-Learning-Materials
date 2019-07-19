//creating a watcher to watch any file activity on target.txt
//running it by typing "node --harmony watcher.js"

const fs = require('fs'); //fs -> file system
fs.watch('target.txt', function() {
	console.log("File 'target.txt' just changed!"); }
	);
console.log("Now watching target.txt for changes...");