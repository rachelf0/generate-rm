// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Description] (#description)
  - [Installation] (#install)
  - [Usage] (#usage)
  - [Contributing] (#contribution)
  - [Tests] (#test)
  - [Questions] (#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  ${data.questions} <br />
  <br /> Find me on GitHub: [${data.username}] (https://github.com/${data.username}) <br />
  <br /> If you have any questions, please email me at: ${data.email} <br />
  <br /> This README was generated with ❤️ by [README-generator] (https://github.com/rachelf0/generate-rm)

`;
}

module.exports = generateMarkdown;
