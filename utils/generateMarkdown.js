const renderLicenseBadge = (license) => {
  switch (license) {
    case "MIT":
      return "https://img.shields.io/apm/l/vim-mode";
    case "None":
      return "";
  }
};

const renderLicenseLink = (license) => {
  switch (license) {
    case "MIT":
      return "\nFind out more on: https://opensource.org/licenses/MIT";
    case "None":
      return "";
  }
};

const renderLicenseSection = (license) => (license === "None" ? "No" : license);

const sliceInstallString = (string) => string.slice(0, -1);

const titleLinkGenerator = (title) => title.replace(/\s/g, "-").toLowerCase();

const generateMarkdown = (data) => {
  return `
# ${data.title}

![${renderLicenseSection(data.license)} license](${renderLicenseBadge(
    data.license
  )})
  
## Description
  
${data.description}
  
## Table of Contents
  
1. [${data.title}](#${titleLinkGenerator(data.title)})
2. [Description](#description)
3. [Table of Contents](#table-of-contents)
4. [Installation](#installation)
5. [Usage](#usage)
6. [License](#license)
7. [Contributing](#contributing)
8. [Tests](#tests)
9. [Questions](#questions)
  
## Installation
  
\`\`\`
${sliceInstallString(data.installationData)}
\`\`\`
  
## Usage
  
${data.usageData}
  
## License
  
${renderLicenseSection(data.license)} license
${renderLicenseLink(data.license)}
  
## Contributing
  
${data.contributing}
  
## Tests
  
${data.tests}
  
## Questions
  
- View my [GitHub](https://github.com/${data.gitHub}) profile
- Email me at ${data.email}
`;
};

module.exports = generateMarkdown;
