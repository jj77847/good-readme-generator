console.log("Hi Jonny you can do this!");

// required packages for readme
// prompt the questions using inquirer
const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  // License
  {
    type: "list",
    message: "Choose a license for your project",
    name: "license",
    choices: ["MIT", "none"],
  },
  // Description of the project
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  // Installation Instructions
  {
    type: "confirm",
    message: "Does your project require any installation?",
    name: "installation",
  },
  //installation steps
  {
    type: "input",
    message: "Please add any installation requirements.",
    name: "installationInformation",
    when: (answers) => {
      return answers.installation;
    },
  },
  // Usage Information
  {
    type: "confirm",
    message: "Do you have usages?",
    name: "usage",
  },
  //Usage steps
  {
    type: "input",
    message: "Please add any additional information.",
    name: "usagesInformation",
    when: (answers) => {
      return answers.usage;
    },
  },

  // Test Instruction
  {
    type: "confirm",
    message: "Are there any tests for this project?",
    name: "tests",
  },

  // Start tests
  {
    type: "input",
    message: "Input any tests requirements:",
    name: "testInput",
    when: (answers) => {
      return answers.test;
    },
  },

  // Contribution
  {
    type: "input",
    message: "How can people contribute to this project?",
    name: "contribution",
  },

  // License
  {
    type: "list",
    message: "Choose a license for your project",
    name: "license",
    choices: ["MIT", "none"],
  },

  // Github Username
  {
    type: "input",
    message: "What is your github user name?",
    name: "github",
  },

  // Email Address
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
]);

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

function generateTitle(answers) {
  return `# TITLE ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=green)`;
}

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

  \`\`\`
  ADD TEXT HERE
  \`\`\``;
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
  
  \`\`\`
  ADD TEXT HERE
  \`\`\``;
};

const generateLicense = (answers) => {
  return `## License

  \`\`\`
  ADD TEXT HERE
  \`\`\``;
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

const init = async () => {
  // generate readme based on answers
  const readme = generateReadme();

  // write generated readme to a file
  writeToFile("GENERATED_README.md", readme);
};

init();
