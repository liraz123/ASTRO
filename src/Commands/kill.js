const axios = require("axios");

const { MessageEmbed } = require("discord.js");

const Command = require("../Structures/Command.js");

module.exports = new Command({
  name: "kill",
  description: "",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    let user = message.mentions.members.first();
    if (!user) return message.channel.send("**Mention a user!**");

    axios
      .get("https://api.waifu.pics/sfw/kill")
      .then((res) => {
        const embed = new MessageEmbed()
          .setTitle(`${message.author.username} killed ${user.user.username}`)
          .setImage(res.data.url)
          .setColor("RANDOM");
        message.channel.send({ embeds: [embed] });
      })
      .catch((err) => {
        console.error(err);
      });
  },
});
