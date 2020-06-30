const inquirer = require('inquirer')
const fs = require('fs')

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of this project?",
            name: "title"
          },
          {
            type: "input",
            message: "Enter a short description for this project.",
            name: "description"
          },
          {
            type: "input",
            message: "What is the installation needed for this application?",
            name: "installation"
          },
          {
            type: "input",
            message: "How would someone try to use this application?",
            name: "usage"
          },
          {
            type: "list",
            message: "What license was used for this application?",
            name: "license" ,
            choices: ["Apache license 2.0", "IBM", "MIT", "ISC", ] 
          },
          {
            type: "input",
            message: "Did you have any contributors?",
            name: "contributors"     
          },
          {
            type: "input",
            message: "What are the test instructions for this application?",
            name: "tests"  
          },
          {
            type: "input",
            message: "What is your github username for contact?",
            name: "githubinfo"  
          },
          {
            type: "input",
            message: "What is your email for questions?",
            name: "email"  
          }
    ])
    .then( answers => {

      let newbadge;
      
      function badgeChoice () {
        let badge = answers.license
      
        if (badge === 'Apache license 2.0') {
          newbadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        }
        if (badge === 'IBM') {
          newbadge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
        }
        if (badge === 'MIT') {
          newbadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        }
        if (badge === 'ISC') {
          newbadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
        }
        return newbadge
      }

      badgeChoice()

      fs.writeFile('readme.md', '', function(err){
           if (err) return console.log(err)
            console.log("Success!")
        })

        fs.appendFile('Readme.md', 
        `# ${answers.title}` + '\n' +
        `## Table of Contents` + '\n' + 
        `* [Desciption](#desciption)` + '\n' +
        `* [Installation](#installation)` + '\n' +
        `* [Usage](#usage)` + '\n' +
        `* [License](#license)` + '\n' +
        `* [Contributors](#contributors)` + '\n' +
        `* [Tests](#tests)` + '\n' +
        `* [Questions](#questions)` + '\n' +
        `## Description` + '\n' +
        `${answers.description}` + '\n' +
        `## Installation` + '\n' +
        `${answers.installation}` + '\n' +
        `## Usage` + '\n' +
        `${answers.usage}` + '\n' +
        `## License` + '\n' +
        `${newbadge}` + '\n' +
        `## Tests` + '\n' +
        `${answers.tests}` + '\n' +
        `## Questions` + '\n' +
        `Please see my github: ` + `[Gihub Profile](https://github.com/${answers.githubinfo})` + '\n' + '<br>' +
        `You can ask me questions here: ${answers.email}` + '\n'
        , function (err) {
            if (err) return console.log(err)
            console.log("Success!")
        })

    })
    .catch(error => {
        if(error.isTtyError) {
            console.log(error)
        } else {
            console.log(error)
        }
    })