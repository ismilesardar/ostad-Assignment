const { MongoClient } = require('mongodb');
require('dotenv').config();
const URL = process.env.LOCAL_HOST;
const client = new MongoClient(URL);
console.log('DataBase Cunected');
module.exports = {client};