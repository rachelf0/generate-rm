// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contributing)
  - [Test](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  This application is covered by the ${data.license} license. 

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  - Find me on GitHub: [${data.username}] (https://github.com/${data.username}) 
  - If you have any questions, please email me at: ${data.email}
  - This README was generated with ❤️ by [generate-rm] (https://github.com/rachelf0/generate-rm)

`;
}

module.exports = generateMarkdown;
