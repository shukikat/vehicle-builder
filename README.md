# vehicle-builder

## Description

This project is an application to create a new vehicle, select an existing vehicle, and perform actions specific to selected vehicle using the command line. This project uses the node.js Inquirer package to initiate the prompts. The purpose of this project was to create an interactive application utilizing typescript and node.js within the context of object oriented programming. 

## Installation

This project is coded in typescript. To run and initiate the app the must install the Inquirer package using the command npm install inquirer. 

## Usage 

Prerequistes: As noted above the user must have node Inquirer package installed. 

To run this project the user:

1) Open the command line on your device
2) Navigate to the directory of your project that includes the package .json file
3) Run the command "npx tsc" to compile all the .ts files into .js files (this may vary based on scripts noted in your package.json file)  
4) Run the command "npm start" (this may vary based on scripts noted in your package.json file) 
5) Upon running this command the node application is initiated and series of prompts is presented. Follow the instructions to make applicable selections, inputs, and actions. 
6) Select action "Exit" to exit out of the application.  

## License

This project includes the MIT License.

## Tests

Example Test Cases:

1) Wheelie action can be implemented if selected or created vehicle is Motorbike.  
2) Wheelie action cannot be implemented if selected or created vehicle is not Motorbike. 
3) Tow action can be implemented if selected or created vehicle is Truck.  
4) Tow action cannot be implemented if selected or created vehicle is not a Truck.  


