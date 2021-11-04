const debug = require("debug")("things:errors");

const notFoundErrorHandler = (req, res) => {
  res.status(404).json({ error: "Not found" });
};

const errorHandler = (error, req, res, next) => {
  debug("An error happened: ", error.message);
  const message = error.code ? error.message : "Exploded";
  res.status(error.code || 500).json({ error: message });
};

module.exports = {
  notFoundErrorHandler,
  errorHandler,
};
