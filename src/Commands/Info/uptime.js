const { MessageEmbed } = require("discord.js");

const Command = require("../../Structures/Command.js");

module.exports = new Command({
  name: "uptime",
  description: "show's bot uptime",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    const uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    const upvalue = (Date.now() / 1000 - client.uptime / 1000).toFixed(0);

    const up = new MessageEmbed().setDescription(
      `${uptime}\n\n <a:greendot:878918064161308722> Since: <t:${upvalue}:T>`
    );

    return message.reply({ embeds: [up] });
  },
});
