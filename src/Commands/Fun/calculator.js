const Command = require("../../Structures/Command.js");

const math = require("mathjs");

const Discord = require("discord.js");

module.exports = new Command({
  name: "calc",
  description: "Does claculation for you",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    if (!args[0]) return message.channel.send("Please provide a question");

    let resp;

    try {
      resp = math.evaluate(args.slice(1).join(" "));
    } catch (e) {
      return message.channel.send("Please provide a **valid** question");
    }

    const embed = new Discord.MessageEmbed()
      .setColor(`#00ff00`)
      .setTitle("Calculator")
      .addField("Question", `\`\`\`css\n${args.slice(1).join(" ")}\`\`\``)
      .addField("Answer", `\`\`\`css\n${resp}\`\`\``);

    message.channel.send({ embeds: [embed] });
  },
});
