# overtop.file
fs wrapper for NodeJS which allows fs functions to return a promise and/or use the async/await keywords 


## Documentation
---

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