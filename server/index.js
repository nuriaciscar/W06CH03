const chalk = require("chalk");
const debug = require("debug")("things:route");
const morgan = require("morgan");
const express = require("express");
const thingsRoutes = require("./routes/thingsDevelopmentRoute");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.yellowBright(`Escuchando en el puerto ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.red("Error al iniciar el servidor."));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red(`El puerto ${port} ya está en uso.`));
    }
  });
};

app.use(morgan("dev"));
app.use(express.json());
app.use("/things", thingsRoutes);

module.exports = initializeServer;
