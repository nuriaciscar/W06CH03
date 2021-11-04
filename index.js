require("dotenv").config();
require("./database/index");
const inquirer = require("inquirer");

const initializeServer = require("./server/index");

const port = process.env.SERVER_PORT || 9000;

(async () => {
  const answers = await inquirer.prompt([
    {
      name: "api",
      type: "input",
      message: "What port do you want the API to start on?",
      default: 4000,
    },
    {
      name: "database",
      type: "list",
      message: "What database do you want to use?",
      choices: [
        {
          name: "production",
          value: "ptn",
        },
        {
          name: "tests",
          value: "tst",
        },
      ],
    },
    {
      name: "user",
      type: "confirm",
      message: "Do you want to allow clients to create, delete and modify?",
      default: true,
    },
  ]);
  console.log(answers);
  initializeServer(port);
})();
