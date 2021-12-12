const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = require("./utils/writeToFile");

const questionsBasicProjectInfo = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "list",
    choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
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
  },
];

const inquirerData = async () => {
  const basicData = await inquirer.prompt(questionsBasicProjectInfo);

  const getInstallationData = async () => {
    const { installation } = await inquirer.prompt(
      questionsInstallationRequirements
    );

    if (installation) {
      let inLoop = true;
      let installationDataString = "";

      while (inLoop) {
        const { installationCode } = await inquirer.prompt(
          questionsInstallationCode
        );

        installationDataString += `${installationCode}\n`;

        const { furtherInstallation } = await inquirer.prompt(
          questionsFurtherInstallationRequirements
        );

        inLoop = furtherInstallation;
      }

      return installationDataString;
    } else {
      return "No installation requirements";
    }
  };

  const getUsageData = async () => {
    const { usage } = await inquirer.prompt(questionsUsageRequirements);

    if (usage) {
      let inLoop = true;
      let usageDataString = "";

      while (inLoop) {
        const { usageInfo } = await inquirer.prompt(questionsUsageInfo);

        usageDataString += `- ${usageInfo}\n`;

        const { furtherUsage } = await inquirer.prompt(
          questionsFurtherUsageInfo
        );

        inLoop = furtherUsage;
      }

      return usageDataString;
    } else {
      return "No usage information";
    }
  };

  const installationData = await getInstallationData();
  const usageData = await getUsageData();

  return { ...basicData, installationData, usageData };
};

const init = async () => {
  const data = await inquirerData();

  const generatedMarkdown = generateMarkdown(data);

  writeToFile("GENERATED_README.md", generatedMarkdown);
};

init();
