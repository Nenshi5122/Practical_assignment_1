const fs = require('fs');
const util = require('util');

const unlinkAsync = util.promisify(fs.unlink);

async function deleteFileAsync(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log(`File ${filePath} has been successfully deleted.`);
  } catch (error) {
    console.error(`Error deleting file ${filePath}: ${error.message}`);
  }
}

const filePathToDelete = './Files/text1.txt';
deleteFileAsync(filePathToDelete);
