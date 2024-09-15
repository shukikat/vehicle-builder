# vehicle-builder

## Description

This project is an application to create a new vehicle, select an existing vehicle, and perform actions specific to selected vehicle using the command line. This project uses the Node.js Inquirer package to initiate the prompts. The purpose of this project was to create an interactive application utilizing typescript and node.js within the context of object-oriented programming. 

## Installation

This project is coded in Typescript. To run and initiate the app the user must install the Inquirer package using the command `npm install inquirer`. 

## Usage 

Prerequisites: As noted above the user must have Node.js Inquirer package installed. 

To run this project:

- Open the command line on your device
- Navigate to the directory of your project that includes the `package .json` file.
- Run the command `npx tsc` to compile all the `.ts` files into `.js` files (this may vary based on scripts' specifics in your `package.json` file).   
- Run the command `npm start` (this may vary based on scripts' specifics in your `package.json` file). 
- Upon running this command the Node application is initiated and series of prompts is presented. Follow the instructions to make applicable     selections, inputs, and actions. 
- Select action "Exit" to exit out of the application.  

## License

This project includes the MIT License.

## Contributions

This repository is available to the public. Please feel free to clone this reposistory and submit a pull request, add any issues, or contact me via github or email!

## Tests

Example Test Cases:

- Wheelie action can be implemented if selected or created vehicle is Motorbike.  
- Wheelie action cannot be implemented if selected or created vehicle is not Motorbike. 
- Tow action can be implemented if selected or created vehicle is Truck.  
- Tow action cannot be implemented if selected or created vehicle is not a     Truck.  


