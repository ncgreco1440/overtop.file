# overtop.file
fs wrapper for NodeJS which allows fs functions to return a promise and/or use the async/await keywords 


## Documentation
---

Using the File Stream as is, can be a sloppy way to go about handling files in NodeJS. Which is why you should use a wrapper
such as this to make things easier when it comes to the inevitable errors that must be handled.

#### Include overtop.file

     const overtop_file = require('overtop.file');

#### Read a file

To read a file, use the **read** function

    overtop_file.read(filePath, encoding)
	 	.then((d) => {
	 		// Do something with data...
	 	})
	 	.catch((err) => {
	 		// Do something about the error...
	 	});

#### Write a file

To write a file, use the **write** function

    overtop_file.write(filePath, data, encoding)
	 	.then((d) => {
	 		// Do other things...
	 	})
	 	.catch((err) => {
	 		// Do something about the error...
	 	});

#### Delete a file

To delete a file, use the **delete** function

    overtop_file.delete(filePath)
	 	.then((d) => {
	 		// Do something else...
	 	})
	 	.catch((err) => {
	 		// Do something about the error...
	 	});