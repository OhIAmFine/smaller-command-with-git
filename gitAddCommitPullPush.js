#!/usr/bin/env node 

var exec = require('child_process').exec;
var program = require('commander');
program.version('0.0.1').usage('<keywords>').parse(process.argv);

var child = exec(`git init && git add . && git commit -m "${ program.args[0] || "[+] just add "}" && git pull origin ${program.args[1] || 'master'} && git push origin ${program.args[1] || 'master'}`, function(err, stdout, stderr) {
	if (err) { 
		console.log(err)
	}else{
		console.log(stdout);
		console.log('push success');
	}
});


