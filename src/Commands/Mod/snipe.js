const { MessageEmbed } = require("discord.js");

const Command = require("../../Structures/Command.js");

const moment = require("moment");

module.exports = new Command({
  name: "snipe",
  description: "Snipe A Deleted Message",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const snipes = client.snipes.get(message.channel.id);

    if (!snipes)
      return message.reply({ content: "There Are No Deleted Messages" });

    const snipe = +args[1] - 1 || 0;

    const target = snipes[snipe];

    if (!target)
      return message.reply(`There is only ${snipes.length} message!`);

    const { msg, time, image } = target;

    const snipeEmbed = new MessageEmbed()
      .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
      .setColor("RANDOM")
      .setDescription(msg.content)
      .setFooter(
        `${moment(time).fromNow()} | ${snipe + 1} / ${snipes.length}`
      );

    if (image) snipeEmbed.setImage(image);
    message.reply({ embeds: [snipeEmbed] });
  },
});
