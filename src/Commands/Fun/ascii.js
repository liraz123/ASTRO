/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

const figlet = require("figlet");

module.exports = new Command({
  name: "ascii",
  description: "",
  permission: "SEND_MESSAGES",

  async run(message, args, client) {
    if (args.slice(1).length > 0)
      return figlet.text(
        args.slice(1).join(" "),
        {
          font: "",
        },
        async (err, data) => {
          const embed = new Discord.MessageEmbed();
          embed.setColor("#000000").setDescription(`\`\`\`${data}\`\`\``);
          message.channel.send({ embeds: [embed] });
        }
      );
    else
      message.reply(
        "<a:warn_:878917634668781629> You did not send a message to repeat, cancelling command."
      );
  },
});
