# SjInventoryControl - Santos Jewelry Inventory Control
    This is a basic inventory solution for a Jewelry store, which provides functions for the store like: view, modify, delete and organize products.

## *Tech talk*
In a more technical perspective, we are are using the following technologies:<br>
* Node.js - Using to write source code.
* Typescript - Using to ensure type-safe code.
* SQlite - Using to manage data.
* Express - Using to provide the local web server.
* Jest - Using to test, mock and do test coverage of the solution.
* Pkg - Using to package our solution into a Windows executable.
* Bootstrap 5 - Using to build the solution's responsive web pages.
* React
* Sequelize

*So if you're new to the project, just run `npm install`*

This software is suposed to work as a "local web application", we provide to the user a `SjInventory.exe` executable that runs a express server on local host.

We have development, testing, acceptance and production executables which can be found on `dist` folder.

### *Architecture*

This project is following the layered architecture, that can be understood by reading the `src` directory. The image below illustrates how a layered architecture works, if you're not used to it already:

![layered-architecture-illustration](https://miro.medium.com/v2/resize:fit:828/format:webp/1*TEt1-6-rSSg2rSX7so8nOg.png)
