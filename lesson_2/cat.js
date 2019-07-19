#!/usr/bin/env node --harmony 
require('fs').createReadStream(process.argv[2]).pipe(process.stdout);
//use chmod to make it executable
//chmod -x cat.js
//then to run it
// ./cat.js <filename>