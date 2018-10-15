const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobCategory: String,
  nameOfOwner: String,
  address: String,
  postcode: String,
  specialRequests: String,
  pay: String,
  contractorId: String,
});

module.exports = mongoose.model('Job', jobSchema);
