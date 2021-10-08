const Discord = require("discord.js");

const Command = require("../../Structures/Command.js");

module.exports = new Command({
  name: "achievement",
  description: "Make's fake achivement like minecraft",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const sayContent = args.slice(1).join(" ");

    if (!sayContent || !args[1])
      if (!sayContent) return message.channel.send("Please specify a text.");
    if (sayContent > 22)
      return message.channel.send(
        "Please type a text no bigger than 22 characters"
      );
    let embed = new Discord.MessageEmbed()
      .setTitle("Achievement unlocked!")
      .setImage(`https://api.cool-img-api.ml/achievement?text=${sayContent}`)
      .setColor("RANDOM");

    message.channel.send({ embeds: [embed] });
  },
});
