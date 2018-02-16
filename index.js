const util = require('util');
const fs = require('fs');
const fs_open = util.promisify(fs.open);
const fs_readFile = util.promisify(fs.readFile);
const fs_writeFile = util.promisify(fs.writeFile);
const fs_unlink = util.promisify(fs.unlink);

module.exports = {
	read: (filePath, encoding) => {
		return new Promise((resolve, reject) => {
			fs_open(filePath, 'r')
				.then((fd) => {
					fs_readFile(filePath, encoding)
						.then((d) => {
							resolve(d);
						})
						.catch((err) => {
							reject(err);
						});
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
	write: (filePath, data, encoding) => {
		return new Promise((resolve, reject) => {
			fs_writeFile(filePath, data, encoding)
				.then((r) => {
					resolve(true);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
	delete: (filePath) => {
		return new Promise((resolve, reject) => {
			fs_unlink(filePath)
				.then((r) => {
					resolve(r);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
	check: (filePath) => {

	},
	readAsync: async (filePath, format) => {

	},
	writeAsync: async (filePath, data) => {

	},
	checkAsync: async (filePath) => {

	}
}