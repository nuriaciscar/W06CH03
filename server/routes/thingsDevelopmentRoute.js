const express = require("express");
const debug = require("debug")("things:route");
const chalk = require("chalk");
const things = require("../../database/models/ThingsIKnow");

const router = express.Router();

router.get("/", async (req, res) => {
  debug("You are in /things");
  const thingsKnown = await things.find();
  res.json(thingsKnown);
});

router.get("/things/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const thingsId = await things.findById(id);
    if (thingsId) {
      res.json(thingsId);
    } else {
      const error = new Error("Things not found");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
});

router.delete("/:idThings", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteThing = await things.findByIdAndDelete(id);
    debug(chalk.gray(deleteThing));
    if (deleteThing) {
      res.json(deleteThing);
    } else {
      const error = new Error("Element not found, sorry");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
});

module.exports = router;
