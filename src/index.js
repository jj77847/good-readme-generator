const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// declare questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "list",
    choices: ["MIT", "None"],
    name: "license",
    message: "Select a license for your project",
  },
  {
    type: "input",
    name: "description",
    message: "What is the project's description?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can people contribute to the project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Are there any tests for this project?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is your gitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your e-mail address?",
  },
];

const questionsInstallationRequirements = [
  {
    type: "confirm",
    name: "installation",
    message: "Are there any installation requirements?",
  },
];

const questionsInstallationCode = [
  {
    type: "input",
    name: "installationCode",
    message: "Type your installation code directly below:",
  },
];

const questionsFurtherInstallationRequirements = [
  {
    type: "confirm",
    name: "furtherInstallation",
    message: "Are there any further installation requirements?",
  },
];

const questionsUsageRequirements = [
  {
    type: "confirm",
    name: "usage",
    message: "Are there any usage information?",
  },
];

const questionsUsageInfo = [
  {
    type: "input",
    name: "usageInfo",
    message: "Type your usage information below:",
  },
];

const questionsFurtherUsageInfo = [
  {
    type: "confirm",
    name: "furtherUsage",
    message: "Are there any further usage information?",
  },];

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

// generate description
const generateDescription = (answers) => {
  return `## Description
  
  ${answers.description};
};

// generate installation steps, if confirmed
const generateInstallation = (answers) => {
  if (answers.installation) {
    return `## Installation
  
  Run the following script to install the packages required for the application:
  
  \`\`\`
$answers.{insallationSteps}
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
  const data = await inquirerData();
  
  // generate readme based on answers
  const readme = generateReadme();

  // write generated readme to a file
  writeToFile('GENERATED_README.md', readme);
};

init();
