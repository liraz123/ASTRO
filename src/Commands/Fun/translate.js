const { MessageEmbed } = require("discord.js");

const Command = require("../../Structures/Command.js");

const translate = require("@iamtraction/google-translate");

module.exports = new Command({
  name: "translate",
  description: "Translate text from different languages.",
  type: "BOTH",
  slashCommandOptions: [
    {
      name: "query",
      description: "Translate text from different languages.",
      type: "STRING",
      required: true,
    },
  ],
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    try {
      const query = args.slice(2).join(" ");
      if (!query)
        return message.reply(
          "What should i translate? ex - h!translate french hello"
        );
      const arg = args[1];

      const translated = await translate(query, { to: `${arg}` });
      const embed = new MessageEmbed()
        .setAuthor("Translated!", message.author.displayAvatarURL())
        .addField("Your Word", `\`\`\`fix\n${query}\`\`\``)
        .addField("Selected Language", `\`\`\`fix\n${arg}\`\`\``)
        .addField("Result", `\`\`\`fix\n${translated.text}\`\`\``)
        .setColor("#00ff00");
      message.channel.send({ embeds: [embed] });
    } catch (error) {
      return message.channel
        .send("No language detected")
        .then(() => console.log(error));
    }
  },
});
