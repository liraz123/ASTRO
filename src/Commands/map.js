const Discord = require("discord.js");

const fetch = require("node-fetch");

const Command = require("../Structures/Command");

module.exports = new Command({
  name: "maps",
  description: "Shows an image of the provided place",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const sit = args.slice(1).join("_");
    if (!args.slice(1).length) return message.reply("Provide a valid location");
    const site = `https://maps.google.com/?q=${args.slice(1).join("+")}`;
    try {
      const msg = await message.channel.send(
        "**Please wait...** This may take up to 10 seconds."
      );
      msg.delete({
        timeout: 5000,
      });
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );
      const att = new Discord.MessageAttachment(body, `${sit}.png`);
      message.channel.send({ files: [att] });
    } catch (err) {
      return message.reply(
        `Oh no, an error occurred: \`${err.message}\`. Try again later!`
      );
    }
  },
});
