const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    additionalInfo: String,
    images: [String],
    selectedOption: String,
    selectedOption2: String,
});

const FormDataModel = mongoose.model('StepForm', formDataSchema);

module.exports = FormDataModel;