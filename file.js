const fs = require('fs');

const writeToFile = (data) => {
  try {
    fs.writeFileSync('index.html', data);
  } catch (error) {
    console.log(`[ERROR]: Failed to write to file | ${error.message}`);
  }
};

module.exports = { writeToFile };
