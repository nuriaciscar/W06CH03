const express = require("express");
const things = require("../../database/models/ThingsIKnow");

const router = express.router();

router.get("/things", async (req, res) => {
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

module.exports = router;
