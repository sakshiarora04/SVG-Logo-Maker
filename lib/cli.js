const inquirer = require('inquirer'); // inquirer library
const { join } = require('path'); 
const { writeFile } = require('fs/promises'); // file system library
const SVG= require('./svg');
const {Circle, Triangle, Square}= require('./shapes');


class CLI {
  constructor() {
    // this.title = '';

    // // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    // this.tasks = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter the text for logo',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter a text color',
        },
        {
          type: 'list',
          name: 'shapeType',
          message: 'Select a shape for logo',
          choices: ['Circle','Triangle','Square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter a shape color',
        },
      ])
      .then(({ text,textColor,shapeType,shapeColor }) => {
      //  const circle=new Circle(text,textColor,shapeType,shapeColor).render();
     
      const svgLogo=this.createSVG({ text,textColor,shapeColor});
     return writeFile(join(__dirname, '..', 'examples', 'logo.svg'),svgLogo)
     })      
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
 createSVG() {
  return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
}

//   run() {
//     return inquirer
//       .prompt([
//         {
//           type: 'input',
//           name: 'name',
//           message: 'Please enter your name',
//         },
//       ])
//       .then(({ name }) => {
//         this.title = `${name}'s Tasks`;
//         return this.addTask();
//       })
//       .then(() => {
//         // sort by priority so that priority tasks come before non-priority tasks
//         this.tasks.sort((a, b) =>
//           a.priority === b.priority ? 0 : a.priority && !b.priority ? -1 : 1
//         );
//         return writeFile(
//           join(__dirname, '..', 'output', 'tasks.html'),
//           createDocument(this.title, this.tasks)
//         );
//       })
//       .then(() => console.log('Created tasks.html'))
//       .catch((err) => {
//         console.log(err);
//         console.log('Oops. Something went wrong.');
//       });
//   }

//   addTask() {
//     return inquirer
//       .prompt([
//         {
//           type: 'input',
//           name: 'text',
//           message: 'Enter task',
//         },
//         {
//           type: 'confirm',
//           name: 'priority',
//           message: 'Is this a priority task?',
//         },
//         {
//           type: 'confirm',
//           name: 'confirmAddTask',
//           message: 'Would you like to add another task?',
//         },
//       ])
//       .then(({ text, priority, confirmAddTask }) => {
//         this.tasks.push({ text, priority });
//         if (confirmAddTask) {
//           return this.addTask();
//         }
//       });
//   }
}

module.exports = CLI;
