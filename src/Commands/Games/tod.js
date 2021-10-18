const Command = require("../../Structures/Command.js");

const f = require("node-fetch");

const { MessageEmbed } = require("discord.js");

module.exports = new Command({
  name: "truth or dare",
  description: "",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    if (!args.slice(1).length)
      return message.channel.send(
        `:x: You did not specify if you want \`truth\` or \`dare\` questions.`
      );

    const query = args.slice(1).join(" ");

    if (query === "truth") {
      await f(`https://casey.gg/api/random-truth`)
        .then((r) => r.json())
        .then((t) => {
          const truthembed = new MessageEmbed()
            .setTitle("Truth")
            .setColor("RANDOM")
            .setDescription(t.truth)
            .setFooter(`Requested by ${message.author.tag}!`);
          message.channel.send({ embeds: [truthembed] });
        });
    } else if (query === "dare") {
      await f(`https://casey.gg/api/random-dare`)
        .then((r) => r.json())
        .then((d) => {
          const dareembed = new MessageEmbed()
            .setTitle("Dare")
            .setColor("RANDOM")
            .setDescription(d.dare)
            .setFooter(`Requested by ${message.author.tag}!`);
          message.channel.send({ embeds: [dareembed] });
        });
    } else {
      const invalidembed = new MessageEmbed()
        .setColor("#ff0000")
        .setDescription(
          `:x: Oops looks like that isn\'t a valid option, Either choose \`truth\` or \`dare\`.`
        );
      message.channel.send({ embeds: [invalidembed] });
    }
  },
});
