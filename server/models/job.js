const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobCategory: String,
  address: String,
  pay: String,
  contractorId: String,
});


module.exports = mongoose.model('Job', jobSchema)