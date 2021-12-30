// console.log("Hi Jonny you can do this!");

// declare questions
const questions = [];

// prompt the questions using inquirer

const generateTitle = (answers) => {
  return `# TITLE ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=green)`;
};

const generateTableOfContents = (answers) => {
  return `## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [License](#license)`;
};

const generateDescription = (answers) => {
  return `## Description

  ADD TEXT HERE`;
};

const generateInstallation = (answers) => {
  return `## Installation

  Run the following script to install the packages required for the application:

  \`\`\`
  ADD TEXT HERE
  \`\`\``;
};

const generateUsage = (answers) => {
  return `## Usage

  To use the application run the following script:

  \`\`\`
  ADD TEXT HERE
  \`\`\``;
};

const generateTests = (answers) => {
  return `## Tests

  To use the application run the following script:

  \`\`\`
  ADD TEXT HERE
  \`\`\``;
};

const generateContributing = (answers) => {
  return `## Contributing

  ADD TEXT HERE`;
};

const generateLicense = (answers) => {
  return `## License

  ADD TEXT HERE`;
};

const generateReadme = (answers) => {
  return `${generateTitle(answers)}

  ${generateTableOfContents(answers)}

  ${generateDescription(answers)}

  ${generateInstallation(answers)}

  ${generateUsage(answers)}

  ${generateTests(answers)}

  ${generateContributing(answers)}

  ${generateLicense(answers)}

`;
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

const init = async () => {
  // prompt the questions using inquirer
  // generate readme based on answers
  const readme = generateReadme();

  // write generated readme to a file
  writeToFile("GENERATED_README.md", readme);
};

init();
