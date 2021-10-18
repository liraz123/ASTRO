/** @format */

const config = require("../Data/config.js");

const Event = require("../Structures/Event.js");

const chalk = require("chalk");

module.exports = new Event("ready", (client) => {
  console.log("Connected To", chalk.cyan(`${client.user.tag}`));
  console.log(chalk.redBright.bold("—————————————[Statistics]—————————————"));
  console.log(
    chalk.gray(
      `Running Node.js ${process.version} on ${process.platform} ${process.arch}`
    )
  );
  console.log(
    chalk.gray(
      `Memory: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(
        2
      )} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )} MB`
    )
  );
  console.log(chalk.redBright.bold("——————————————————————————————————————"));
  const arrayOfStatus = [
    `📡 ${client.guilds.cache.size} servers 🛰️`,
    `Prefix [${config.prefix}]`,
    `👩🏻 ${client.users.cache.size} users 👦🏻`,
  ];

  let index = 0;
  setInterval(() => {
    if (index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
    client.user.setActivity(status, {
      type: "WATCHING",
    });
    index++;
  }, 3000); //in ms
});
