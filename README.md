# vehicle-builder

## Description

This project is an application to create a new vehicle, select an existing vehicle, and perform actions specific to selected vehicle via the command line. This project uses the Node.js Inquirer package to initiate the prompts. The purpose of this project was to create an interactive application utilizing typescript and Node.js within the context of object-oriented programming. 

## Installation

This project is coded in Typescript. To run and initiate the app the user must install the Inquirer package using the command `npm install inquirer`. 

## Usage 

Prerequisites: As noted above the user must have Node.js Inquirer package installed. 

To run this project:

- Open the command line on your device.
- Navigate to the directory of your project that contains the `package.json` file.
- Run the command `npx tsc` to compile all the `.ts` files into `.js` files (this may vary based on scripts' specifics in your `package.json` file).   
- Run the command `npm start` (this may vary based on scripts' specifics in your `package.json` file). 
- Upon running `npm start` the Node application is initiated and series of prompts is presented. Follow the instructions to make applicable     selections, inputs, and actions. 
- Select action "Exit" to exit out of the application.  

[Demo of vehicle-builder app]() 

## License

This project includes the MIT License.

## Contributions

I received assistance on the project by using the tool, Xpert Learning Assistant, available through my Columbia Engineering Bootcamp account. This tool helped guide me through some difficulties I had in executing my findVehicletoTow method, adding applicable parameters to my tow method, and providing explanations on functionalities of preexisting code. 

 This repository is available to the public. Please feel free to clone this repository, submit a pull request, and add any issues. You can contact me via github or email!

- [Link to vehicle-builder repository](https://github.com/shukikat/vehicle-builder)

- [My Email](mailto:kathuriashuki@gmail.com)


## Tests

Example Test Cases:

- Wheelie action can be implemented if selected or created vehicle is Motorbike.  
- Wheelie action cannot be implemented if selected or created vehicle is not Motorbike. 
- Tow action can be implemented if selected or created vehicle is Truck.  
- Tow action cannot be implemented if selected or created vehicle is not a     Truck.  


