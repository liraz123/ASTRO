const Command = require("../Structures/Command.js");

const fetch = require("node-fetch");

const Discord = require("discord.js");

module.exports = new Command({
  name: "quote",
  description: "",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        const quotembed = new Discord.MessageEmbed()
          .setDescription(data.content)
          .setColor("RANDOM")
          .setFooter(`-${data.author}`);
        message.channel.send({ embeds: [quotembed] });
      });
  },
});
