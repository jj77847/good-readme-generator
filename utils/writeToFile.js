const writeToFile = (fileName, data) => {
  const onFileWrite = (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} was successfully created`);
    }
  };

  fs.writeFile(fileName, data, onFileWrite);
};

module.exports = writeToFile;
