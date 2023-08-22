const app = require("./app");
require("dotenv").config();
const http = require("http");
const { connectDB } = require("./db");
const server = http.createServer(app);
var colors = require('colors');

const port = process.env.PORT || 4000;
const main = async () => {
  try {
    await connectDB();
    server.listen(port, async () => {
      console.log("Server is listening on port 4000".bgGreen);
    });
  } catch (e) {
    console.log("Database Error");
    console.log(e);
  }
};

main();
