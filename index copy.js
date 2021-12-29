const inquirer = require('inquirer');
const { writeToFile } = require('./file');
const { generateHTML } = require('./generator');

const { isRequired, isUrl, isEmail } = require('./validate');

const init = async () => {
  // declare questions
  const questions = [
    {
      type: 'input',
      message: 'Enter full name:',
      name: 'fullName',
      validate: isRequired,
    },
    {
      type: 'input',
      message: 'Enter location:',
      name: 'location',
      validate: isRequired,
    },
    {
      type: 'input',
      message: 'Enter bio details:',
      name: 'bio',
      validate: isRequired,
    },
    {
      type: 'input',
      message: 'Enter profile image URL:',
      name: 'profileImageUrl',
      validate: isUrl,
    },
    {
      type: 'input',
      message: 'Enter email address:',
      name: 'email',
      validate: isEmail,
    },
    {
      type: 'input',
      message: 'Enter GitHub profile URL:',
      name: 'githubUrl',
      validate: isUrl,
    },
    {
      type: 'input',
      message: 'Enter LinkedIn profile URL:',
      name: 'linkedinUrl',
      validate: isUrl,
    },
  ];

  // prompt questions and save answers
  const answers = await inquirer.prompt(questions);

  // pass answers to generateHTML and save html

  const html = generateHTML(answers);

  // write html data to index.html file

  writeToFile(html);

  console.log('Successfully created portfolio page!');
};

init();
