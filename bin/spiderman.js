#!/usr/bin/env node

var program = require('commander');
var Spiderman = require('../lib/spiderman');

program.version('0.0.1')

program
	.command('run')
	.description('run crawler')
	.option("-p, --path [path]", "config file path")
	.action(function(options) {
		if (!options.path) {
			console.log('you must specified the config file');
			return;
		}
		new Spiderman({
			configFile: options.path
		}).start();
	});

program.parse(process.argv);
if (program.args.length === 0) program.help()