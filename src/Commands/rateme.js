/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
  name: "rateme",
  description: "Rate you",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    let user = message.mentions.users.first() || message.author;
    const rate = Math.floor(Math.random() * (100 - 1 + 1) + 1);

    const embed = new Discord.MessageEmbed();
    embed
      .setTitle(`${user.username}'s Coolrate`)
      .setDescription(`${user} is ${rate}% cool  `)
      .setColor("#00000")
      .setFooter(
        `${user.tag}`,
        user.displayAvatarURL({
          dynamic: true,
        })
      );
    message.channel.send({
      embeds: [embed],
    });
  },
});
