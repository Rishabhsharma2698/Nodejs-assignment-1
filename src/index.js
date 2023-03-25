const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return fs.writeFile(fileName, fileContent)
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	return fs.readFile(fileName)
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return fs.appendFile(fileName,fileContent)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	return fs.unlink(fileName)
}

myFileWriter('Person','Rishabh')
// myFileReader('Person')
// myFileUpdater('Person','Hello')
// myFileDeleter('Person')

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }