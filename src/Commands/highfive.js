const axios = require("axios");

const { MessageEmbed } = require("discord.js");

const Command = require("../Structures/Command.js");

module.exports = new Command({
  name: "highfive",
  description: "Give highfive to friend or member.",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    let user = message.mentions.members.first();
    if (!user) return message.channel.send("**Mention a member!**");

    axios
      .get("https://api.waifu.pics/sfw/highfive")
      .then((res) => {
        const embed = new MessageEmbed()
          .setTitle(
            `${message.author.username} gave highfive to ${user.user.username}`
          )
          .setImage(res.data.url)
          .setColor("RANDOM");
        message.channel.send({ embeds: [embed] });
      })
      .catch((err) => {
        console.error(err);
      });
  },
});
