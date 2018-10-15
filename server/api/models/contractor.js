const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contractorSchema = new Schema({
  name: String,
  address: String,
  postcode: String,
  mobile: Number,
  email: String,
  jobTitle: String,
  jobsAccepted: Number,
  jobsDeclined: Number,
  jobsNoResponse: Number,
});

module.exports = mongoose.model('Contractor', contractorSchema);
