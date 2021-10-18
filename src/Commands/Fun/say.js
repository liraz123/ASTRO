/** @format */

const Command = require("../../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
  name: "say",
  description: "Echo what you say",
  type: "BOTH",
  slashCommandOptions: [
    {
      name: "text",
      description: "Text you want me to echo",
      type: "STRING",
      required: true,
    },
  ],
  permission: "SEND_MESSAGES",
  run: async (interaction, args, client) => {
    if (args.slice(1).length > 0)
      return await interaction.reply(args.slice(1).join(" "));
    else
      interaction.reply(
        "<a:warn_:878917634668781629> You did not send a message to repeat, cancelling command."
      );
  },
});
