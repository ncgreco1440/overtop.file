const fs = require('fs');
var chai = require('chai');
var assert = chai.assert;
var overtop_file = require('../index.js');
const UnexpectedSuccess = new Error('Unexpected Success');

describe('overtop.file', function() {

	describe('read function', function() {
		it('the \'read\' function should read from a file using default buffer encoding.', function(done) {
			overtop_file.read(__dirname+'/test.txt')
				.then((d) => {
					assert.equal("Hello, World!", d);
					done();
				})
				.catch((err) => {
					done(err);
				});
		});

		it('the \'read\' function should read from a file using a specified utf-8 encoding.', function(done) {
			overtop_file.read(__dirname+'/test.txt', 'utf-8')
				.then((d) => {
					assert.equal("Hello, World!", d);
					done();
				})
				.catch((err) => {
					done(err);
				});
		});

		it('the \'read\' function should reject if the file does not exist.', function(done) {
			overtop_file.read(__dirname+'/test1.txt')
				.then((d) => {
					done(UnexpectedSuccess);
				})
				.catch((err) => {
					done();
				});
		});
	});

	describe('write function', function() {
		afterEach(function() {
			fs.unlink(__dirname+'/testWrittenFile.txt', (err) => {
				if(err) throw err;
			});
		});

		it('the \'write\' function should create a new file under the default buffer encoding and resolve to true.', function(done) {
			overtop_file.write(__dirname+'/testWrittenFile.txt', 'Hello, World!')
				.then((r) => {
					assert.equal(r, true);
					done();
				})
				.catch((err) => {
					done(err);	
				});
		});

		it('the \'write\' function should create a new file under the utf-8 encoding and resolve to true.', function(done) {
			overtop_file.write(__dirname+'/testWrittenFile.txt', 'Hello, World!', 'utf-8')
				.then((r) => {
					assert.equal(r, true);
					done();
				})
				.catch((err) => {
					done(err);	
				});
		});
	});

	describe('delete function', function() {
		afterEach(function() {
			fs.writeFile(__dirname+'/testDelete.txt', 'Hello, World!', (err) => {
				if(err) throw err;
			});
		});

		it('the \'delete\' function should delete a specified file', function(done) {
			overtop_file.delete(__dirname+'/testDelete.txt')
				.then((r) => {
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
	});
	
});