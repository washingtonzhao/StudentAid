const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import resource from './resource';

const sourceSchema = new Schema({
    name: String,
    resources: [resource]
});

const source = mongoose.model('source', sourceSchema);

module.exports = source;