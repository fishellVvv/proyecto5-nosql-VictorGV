const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const actorSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    birthYear: { type: Number, required: false },
    nationality: { type: String, trim: false },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Actor = mongoose.model("Actor", actorSchema);

module.exports = Actor;
