/** @format */

const Command = require("../../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
  name: "avatar",
  description: "Shows avatar of a user.",
  permission: "SEND_MESSAGES",
  aliases: ["av", "pfp"],
  type: "BOTH",
  slashCommandOptions: [
    {
      name: "avatar",
      description: "Shows avatar of a user.",
      type: "USER",
      required: true,
    },
  ],
  async run(message, args, client) {
    const Target =
      message instanceof Discord.CommandInteraction
        ? message.guild.members.cache.find((m) => m.id === args[1]) ||
          message.guild.members.cache.find((m) => m.id === message.user.id)
        : message.mentions.members.first() || message.member;
    const member =
      message instanceof Discord.CommandInteraction
        ? message.guild.members.cache.find((m) => m.id === message.user.id)
        : message.member;

    const embed = new Discord.MessageEmbed();

    embed
      .setAuthor(`${Target.user.tag}"s Avatar`, Target.user.displayAvatarURL())
      .setColor(`#0AFFFF`)
      .setDescription(
        `[PNG](${Target.user.displayAvatarURL({
          dynamic: true,
          format: "png",
        })}) | [JPG](${Target.user.displayAvatarURL({
          dynamic: true,
          format: "jpg",
        })}) | [GIF](${Target.user.displayAvatarURL({
          dynamic: true,
          format: "gif",
        })}) | [WEBP](${Target.user.displayAvatarURL({
          dynamic: true,
          format: "webp",
        })})`
      )
      .setImage(
        `${Target.user.displayAvatarURL({
          size: 4096,
          dynamic: true,
          format: "png",
        })}`
      )
      .setFooter(
        `Requested by: ${member.user.tag}`,
        member.user.displayAvatarURL({
          dynamic: true,
        })
      )
      .setTimestamp(message.createdTimestamp);
    message.reply({
      embeds: [embed],
    });
  },
});
