const moongoose = require('mongoose');

const supplierSchema = moongoose.Schema({
    SName: String,
    SID: {type: String, unique : true },
    SEmail: String,
    SPhone: Number,
    SGSTIN: String,
    SAddress: {
        City: String,
        State: String,
        PinCode: String,
        Country: String
    },
    Contact: {
        Name: String,
        Email: String,
        No: Number
   },
    
    BankingDetails: {
       BankName: String,
       AccountName: String,
       AccountType: String,
       IFSC: String
   },
   Nature: String

});

module.exports.supplierSchema = supplierSchema;