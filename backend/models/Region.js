const mongoose = require("mongoose");
const dayjs = require("dayjs");

const Schema = mongoose.Schema;

const regionSchema = new Schema({
  region: String,
  associations: Object,
  updatedAt: { type: Number, default: dayjs().unix() },
  deletedAt: { type: Number, default: null }
});

module.exports = mongoose.model("Region", regionSchema);
