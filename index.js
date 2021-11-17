// const fs = inquirer("fs");

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

// console.log(questions);

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

  ${answers.description}`;
};

const generateInstallation = (answers) => {
  if (answers.installation) {
    return `## Installation

  Run the following script to install the packages required for the application:

  \`\`\`
  ${answers.installation}
  \`\`\`
    `;
  } else {
    return ``;
  }
};

const generateUsage = (answers) => {
  return `## Usage

  To use the application run the following script:

  \`\`\`
  ${answers.usage}
  \`\`\``;
};

const generateTests = (answers) => {
  return `## Tests

  To use the application run the following script:

  \`\`\`
  ${answers.Tests}
  \`\`\``;
};

const generateContributing = (answers) => {
  return `## Contributing

  ${answers.contributing}`;
};

const generateLicense = (answers) => {
  return `## License

  ${answers.license}`;
};

const generateReadme = (answers) => {
  return `${generateTitle(answers)}

  ${generateTableOfContents(answers)}

  ${generateDescription(answers)}

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

  console.log(readme);

  // write generated readme to a file
  writeToFile("GENERATED_README.md", generateReadme);
};

init();

// this works - node index.js
// console.log("Hi Jonny, Keep Going!");
// this works - npm run start NOT Working?
