const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import source from './source';

const regionSchema = new Schema({
  name: String,
  sources: [source]
});

const region = mongoose.model('region', regionSchema);

module.exports = region;