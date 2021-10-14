// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return "https://img.shields.io/badge/license-Apache%202.0-brightgreen";
  } else if (license === "GNU GPLv2") {
    return "https://img.shields.io/badge/license-GNU%20GPLv2-green";
  } else if (license === "GNU GPLv3") {
    return "https://img.shields.io/badge/license-GNU%20GPLv3-yellowgreen";
  } else if (license === "MIT") {
    return "https://img.shields.io/badge/license-MIT-yellow";
  } else if (license === "ISC") {
    return "https://img.shields.io/badge/license-ISC-orange";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return `## License
  
  This application is covered under ${license}. For more information, 

  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  Have any questions? My Github and email:

  [Github](https://github.com/${data.github})  
  Email: ${data.email}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
