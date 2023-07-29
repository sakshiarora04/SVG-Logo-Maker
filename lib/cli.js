const inquirer = require('inquirer'); // inquirer library
const { join } = require('path'); 
const { writeFile } = require('fs/promises'); // file system library
const SVG= require('./svg');
const {Circle, Triangle, Square}= require('./shapes');
const { error } = require('console');


class CLI {
  constructor() {
   
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter the text for logo (Enter upto three characters)',
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
        let shapeName;
   
      switch (shapeType){
        case 'Circle':
          if(text<3){
            throw new error('logo name is less than 3 characters')
          }
          shapeName=new Circle(shapeColor).render(); 
         console.log(shapeName)
          break;
          case 'Triangle':          
          shapeName=new Triangle(shapeColor).render();        
          break;
          case 'Square':          
           shapeName=new Square(shapeColor).render();        
           break;
      }
      console.log(shapeName)
      return shapeName;
    })
      .then((res)=>{
        // const svgLogo=this.createSVG(res);
        return writeFile(join(__dirname, '..', 'examples', 'logo.svg'),res)
      })     
  
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
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
