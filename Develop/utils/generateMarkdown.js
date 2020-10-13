// function to generate markdown for README
function generateMarkdown(data) {
  let licenseCode = "";
  if (data.license === "Apache License 2.0") {
    licenseCode = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    if (data.license === "MIT") {
      licenseCode = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else {
      licenseCode = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }

  }
  return `# ${data.projectName}
${licenseCode}
${data.description}
${data.install}
${data.usage}
${data.guidelines}
${data.test}
${data.license}
${data.git}
${data.email}
<a name ="headers"></a>
`;
}

module.exports = generateMarkdown;
