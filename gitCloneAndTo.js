#!/usr/bin/env node 

var exec = require('child_process').exec;
var program = require('commander');
program.version('0.0.1').usage('<keywords>').parse(process.argv);

var child = exec(`git clone ${program.args[0]} && cd ./${program.args[0].slice(program.args[0].lastIndexOf('/') + 1, program.args[0].lastIndexOf('.'))}`, function(err, stdout, stderr) {
	if (err) { 
		console.log(err)
	}else{
		console.log(stdout);
	}
});


