const Command = require("../../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
  name: "wanted",
  description: "",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let avatar = user.user.displayAvatarURL({ dynamic: true, format: "png" });

    const embed = new Discord.MessageEmbed()
      .setTitle(`${user.user.username} you are wanted!`)
      .setImage(`https://api.cool-img-api.ml/wanted?image=${avatar}`);
    message.channel.send({ embeds: [embed] });
  },
});
