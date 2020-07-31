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
  // ${data.questions}

`;
}

module.exports = generateMarkdown;
