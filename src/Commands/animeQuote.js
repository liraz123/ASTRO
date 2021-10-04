const axios = require("axios");

const Command = require("../Structures/Command");

const Discord = require("discord.js");

module.exports = new Command({
  name: "animequote",
  description: "",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const url = "https://animechan.vercel.app/api/random";

    axios.get(url).then((res) => {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Random Anime Quote`)
        .setDescription(res.data.quote)
        .setFooter(
          `Anime: ${res.data.anime} | Character: ${res.data.character}`
        );
      message.channel.send({ embeds: [embed] });
    });
  },
});
