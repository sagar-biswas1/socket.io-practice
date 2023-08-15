const mongoose = require("mongoose");
require("dotenv").config();

const generateConnectionString = () => {
  let connectionUrl = process.env.DB_CONNECTION_URL;

  return `${connectionUrl}`;
};

const connectDB = async () => {
  const url = generateConnectionString();
  const options = {
    autoIndex: false,
    dbName: process.env.DB_NAME,
  };
 
  await mongoose.connect(url, { dbName: process.env.DB_NAME });

  console.log(`Connected to db`);
};


module.exports = connectDB;
