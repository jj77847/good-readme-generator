const inquirer = require("inquirer");

const fs = require("fs");

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
  return `# ${answers.title} ![${answers.license}](https://img.shields.io/static/v1?label=${answers.license}&message=License&color=green)`;
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

  ${generateDescription(answers)}

  ${generateInstallation(answers)}

  ${generateUsage(answers)}

  ${generateTests(answers)}

  ${generateContributing(answers)}

  ${generateLicense(answers)}
  `;
};

const loopQuestion = async (question) => {
  let inProgress = true;
  const results = [];

  while (inProgress) {
    const answers = await inquirer.prompt(question);
    results.push(answers);
    const { quit } = await inquirer.prompt({
      type: "confirm",
      message: "do you want to quit?",
      name: "quit",
    });

    if (quit) {
      inProgress = false;
    }
  }
};
const getOtherContents = ({ installation, usage, tests }) => {
  const contents = [];

  if (installation) contents.push("- [Installation](#installation)");

  if (usage) contents.push("- [Usage](#usage)");

  if (tests) contents.push("- [Tests](#tests)");

  return contents;
};

const generateTableOfContents = (answers) => {
  const contents = [
    "- [Description](#description)",
    ...getOtherContents(answers),
    "- [Contributing](#contributing)",
    "- [License](#license)",
    "- [Question](#question)",
  ];

  return `## Table of Contents\n
${contents.join("\n")}
`;
};

const inquirer = require("inquirer");

const loopQuestion = async (question) => {
  let inProgress = true;
  const results = [];

  while (inProgress) {
    const answers = await inquirer.prompt(question);
    results.push(answers);
    const { quit } = await inquirer.prompt({
      type: "confirm",
      message: "do you want to quit?",
      name: "quit",
    });

    if (quit) {
      inProgress = false;
    }
  }

  return results;
};

loopQuestion({
  type: "input",
  name: "installationSteps",
  message: "What are your steps?",
});

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

const init = async () => {
  // prompt the questions using inquirer
  const answers = await inquirer.prompt(questions);
  // generate readme based on answers
  const readme = generateReadme(answers);

  console.log(readme);

  // write generated readme to a file
  writeToFile("GENERATED_README.md", readme);
};

init();

// this works - node index.js
// console.log("Hi Jonny, Keep Going!");
// this works - npm run start NOT Working?
