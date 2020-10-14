// function to generate markdown for README
function generateMarkdown(data) {
  let licenseCode = "";
  if (data.license === "Apache License 2.0") {
    licenseCode = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
    else if (data.license === "MIT") {
      licenseCode = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
   else if (data.license === "GPL") {
      licenseCode = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"


  }
  return `# ${data.projectName}


${licenseCode}

##### Table of Contents

[Descriptions](#description) 

[Installations](#installation) 

[Usage](#usage) 

[Contributions](#contributing) 

[Tests](#tests) 

[License](#license) 

## Description
${data.description}
## Installation
${data.install}
## Usage
${data.usage}
## Contributing
${data.guidelines}
## Tests
${data.test}
## License

${data.license}

## Questions
For any addition questions please reach out via
* <a href = "${data.git}">Github Profile</a>
* <a href = "${data.email}">Click to Email</a>

`;
}

module.exports = generateMarkdown;
