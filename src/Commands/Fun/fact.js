const Command = require("../../Structures/Command");

const fetch = require("node-fetch");

const { MessageEmbed } = require("discord.js");

module.exports = new Command({
  name: "fact",
  description: "",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    fetch(`https://casey.gg/api/fact`)
      .then((r) => r.json())
      .then((f) => {
        const factembed = new MessageEmbed()
          .setTitle("Fact")
          .setColor("RANDOM")
          .setDescription(f.fact)
          .setFooter(`Requested by ${message.author.tag}!`);
        message.channel.send({ embeds: [factembed] });
      });
  },
});
