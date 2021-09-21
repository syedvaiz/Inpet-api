const dotenv = require('dotenv').config();
const moongoose = require('mongoose');
const {supplierSchema} = require('./supplierSchema');
const {customerSchema} = require('./customerSchema');
const DB_URL = process.env.MONGO_DB_URL;

async function connectDB(){
try {
    await moongoose.connect(DB_URL);
    console.log('Connected Successfully');
    //moongoose.connection.useDb('inpet');
 } catch (error) {
    console.log('Error connecting to DB ::', error);
}
}

connectDB();

var db = moongoose.connection.useDb('inpet');

const UsersSchema = moongoose.Schema({
    name: String
});

module.exports.db = moongoose;
module.exports.users = moongoose.model('users', UsersSchema);
module.exports.suppliers = moongoose.model('suppliers', supplierSchema);
module.exports.customers = moongoose.model('customers', customerSchema);