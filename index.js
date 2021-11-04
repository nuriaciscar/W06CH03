require("dotenv").config();
// const inquirer = require("inquirer");

const initializeServer = require("./server/index");

const port = process.env.SERVER_PORT || 4000;

initializeServer(port);
