const debug = require("debug")("things:database");

const chalk = require("chalk");
const mongoose = require("mongoose");

moongose.connect(process.env.MONGODB_STRING, (error) => {
  if (error) {
    debug(chalk.red("No se ha podido iniciar la base de datos."));
    debug(chalk.red(error.message));
    return;
  }
  debug(chalk.blue("Conectado a la base de datos"));
});
