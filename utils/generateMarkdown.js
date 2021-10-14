// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
