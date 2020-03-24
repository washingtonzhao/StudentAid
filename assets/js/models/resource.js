const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    name: String,
    url: String
});

const resource = mongoose.model('resource', resourceSchema);

module.exports = resource;