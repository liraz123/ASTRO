/** @format */

console.clear();

const Client = require("./Structures/Client.js");

const config = require("./Data/config.js");

const client = new Client();

console.log(`My prefix is [ ${config.prefix} ]`)

client.start(process.env.token, process.on('unhandledRejection', (err) => {
    console.log('err' + err)}));