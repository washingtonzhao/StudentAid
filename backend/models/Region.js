/* Import package dependencies */
const mongoose = require("mongoose");
const dayjs = require("dayjs"); // Package to work with dates

/* Create MongoDB schema instance */
const Schema = mongoose.Schema;

const regionSchema = new Schema({
  region: String,
  resources: Array,
  updatedAt: { type: Number, default: dayjs().unix() },
  deletedAt: { type: Number, default: null }
});

/* Export MongoDB model – create model with schema instance */
module.exports = mongoose.model("Region", regionSchema);
