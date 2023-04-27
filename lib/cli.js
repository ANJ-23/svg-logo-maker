const inquirer = require('inquirer');
const fs = require('fs');
const { createSVG } = require('./svg')

class CLI {
    // initializes color & shape variables
    constructor() {
        this.color = '';
        this.shape = '';
    }

    // prompts user on what text, text color, shape, & shape color they want
    run() {
        return inquirer.prompt([
            {
                type: 'input',
                message: 'Type up to 3 text characters:',
                name: 'text'
            },
            {
                type: 'input',
                message: 'Text color (enter either a color name or a hex code):',
                name: 'textColor'
            },
            {
                type: 'list',
                message: 'Choose the shape:',
                choices: ['circle', 'square', 'triangle'],
                name: 'shape'
            },
            {
                type: 'input',
                message: 'Background color (enter either a color name or a hex code):',
                name: 'shapeColor'
            },
          ])
        .then(( choice ) => {
            let textLogo = choice.text;

            // if text is > 3 characters, throw error
            if (textLogo.length > 3) {
                throw new Error("Text should not be more than 3 characters.");
            }

            this.color = choice.shapeColor;
            this.shape = choice.shape;
            let svgCode = createSVG(this.color, this.shape); // creates & stores first few lines of code

            // stores text for complete SVG code
            let fullSVG = `${svgCode}
    
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="${choice.textColor}">${choice.text}</text>
    
</svg>`

            // writes complete code to file - named after the shape
            fs.writeFile(`${this.shape}.svg`, fullSVG, (err) =>
                err ? console.error(err) : console.log('Logo created!'))           
          })
      }
}

module.exports = CLI;