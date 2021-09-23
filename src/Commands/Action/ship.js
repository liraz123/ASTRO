const Command = require("../../Structures/Command.js");

const Discord = require("discord.js");

const fetch = require("node-fetch");

module.exports = new Command({
  name: "ship",
  description: "",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let avatar = user.user.displayAvatarURL({ dynamic: true, format: "png" });

    let messager = message.author.displayAvatarURL({
      dynamic: true,
      format: "png",
    });

    fetch(
      `https://nekobot.xyz/api/imagegen?type=ship&user1=${encodeURIComponent(
        messager
      )}&user2=${encodeURIComponent(avatar)}`
    )
      .then((res) => res.json())
      .then((data) => {
        const embed = new Discord.MessageEmbed()
          .setTitle(`💗 MATCHMAKING 💗`)
          .setDescription(`🔻\`${message.author.tag}\`\n🔺\`${user.user.tag}\``)
          .setImage(data.message);
        message.channel.send({ embeds: [embed] });
      });
  },
});
