#!/usr/bin/env node 

var exec = require('child_process').exec;
var program = require('commander');
program.version('0.0.1').usage('<keywords>').parse(process.argv);


var child = exec(`git init && git add . && git commit -m "${ program.args[0] || "[+] just add "}" `, function(err, stdout, stderr) {
	if (err) { 
		console.log(err)
	}else{
		console.log(stdout);
	}
});


