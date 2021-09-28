/** @format */

console.clear();

const Client = require("./Structures/Client.js");

const mongoose = require("mongoose");

const { mongooseConnectionString, prefix, token } = require("./Data/config.js");

const client = new Client();

console.log(`My prefix is [ ${prefix} ]`);

// mongoose
if (!mongooseConnectionString) return;

mongoose
  .connect(mongooseConnectionString)
  .then(() => console.log("Connected to mongodb"));

process.on("unhandledRejection", (err) => {
  console.log("err" + err);
});
client.start(token);
