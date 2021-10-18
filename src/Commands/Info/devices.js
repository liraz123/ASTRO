/** @format */

const Command = require("../../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
  name: "devices",
  description: "Shows the device of the the user using",
  permission: "SEND_MESSAGES",
  async run(message, client, args) {
    let user =
      message.mentions.members.last() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;
    const devices = user.presence?.clientStatus || {};

    const description = () => {
      if (devices > 1) {
        const entries = Object.entries(devices).map((value) => value[0]);
        return `Device: ${entries}`;
      } else {
        const entries = Object.entries(devices)
          .map(
            (value, index) =>
              `**${
                index + 1
              }** <a:ar:878262605154766899> ${value[0][0].toUpperCase()}${value[0].slice(
                1
              )}`
          )
          .join("\n");
        return `Devices: \n${entries}`;
      }
    };
    const embed = new Discord.MessageEmbed();
    embed
      .setAuthor(user.user.tag, user.user.displayAvatarURL())
      .setDescription(description());
    message.channel.send({
      embeds: [embed],
    });
  },
});
