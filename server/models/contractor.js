const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contractorSchema = new Schema({
    name: String,
    address: String,
    jobTitle: String,
    jobsAccepted: Number,
    jobsDeclined: Number,
    jobsNoResponse: Number,
}) 

module.exports = mongoose.model('Contractor', contractorAuthor)