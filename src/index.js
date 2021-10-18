/** @format */

console.clear();

const Client = require("./Structures/Client.js");

const mongoose = require("mongoose");

const config = require("./Data/config.js");

const client = new Client();

const { Player } = require("discord-music-player");

const player = new Player(client, {
  leaveOnEmpty: false,
  leaveOnStop: true,
  deafenOnJoin: true,
  volume: 100,
  quality: "high",
  timeout: "30000",
});

client.player = player;

// mongoose
if (!config.mongooseConnectionString) return;

mongoose
  .connect(config.mongooseConnectionString)
  .then(() => console.log("Connected to mongodb"));

client.start(
  config.token,
  process.on("unhandledRejection", (err) => {
    console.log("err" + err);
  })
);
