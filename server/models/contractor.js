const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contractorSchema = new Schema({
  name: String,
  address: String,
  postcode: String,
  jobTitle: String,
  jobsAccepted: Number,
  jobsDeclined: Number,
  jobsNoResponse: Number,
});

module.exports = mongoose.model('Contractor', contractorSchema);
