const inquirer = require('inquirer'); // inquirer library
const { join } = require('path'); 
const { writeFile } = require('fs/promises'); // file system library
const SVG= require('./svg');
const {Circle, Triangle, Square}= require('./shapes');

class CLI {
  
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter the text for logo (Enter upto three characters)',
          validate:this.checkTextSize,
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter a text color',
          validate: this.colorValidCheck,
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
          validate: this.colorValidCheck,
        },
      ])
      .then(({text,textColor,shapeType,shapeColor }) => {
        let shapeObj;  
   
      switch (shapeType){
        case 'Circle':          
          shapeObj=new Circle(shapeColor);          
          break;
          case 'Triangle':          
          shapeObj=new Triangle(shapeColor);        
          break;
          case 'Square':          
          shapeObj=new Square(shapeColor);        
           break;
      }      
      const svgLogo=new SVG();    
      svgLogo.setText(text,textColor);
      svgLogo.setShape(shapeObj);
        return writeFile(join(__dirname, '..', 'output', 'logo.svg'),svgLogo.render());
    })
          
  
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
colorValidCheck(input){
  //  const color=[]
    const color=input.toLowerCase();
    const colorKeywords = ['aliceblue', 'antiquewhite', 'aqua', 'aquaMarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen']
    const newArray=colorKeywords.filter(word => word===color);   
    const hexDecRegex = '^#[A-Fa-f0-9]{6}$';
    if ( !newArray.length&& !input.match(hexDecRegex) ) {
     return 'Please enter valid color';
   }
   return true;    
  }

  checkTextSize(input){
    if(input.length>3){
      return 'Logo text must be less than 3 characters';
    }
    return true;
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
