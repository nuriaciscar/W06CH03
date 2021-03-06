const { Schema, model } = require("mongoose");

const thingsSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  week: {
    type: Number,
    required: true,
    min: 1,
  },
});

const things = model("production", thingsSchema);

module.exports = things;
