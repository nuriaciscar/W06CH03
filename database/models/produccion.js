const { Schema, model } = require("mongoose");

const produccionSchema = new Schema({
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

const produccion = model("produccion", produccionSchema);

module.exports = produccionSchema;
