/** @format */

const Command = require("../../Structures/Command.js");

const { MessageActionRow, MessageEmbed, MessageButton } = require("discord.js");

module.exports = new Command({
  name: "invite",
  description: "Gives invite link to invite bot in your server.",
  type: "BOTH",
  slashCommandOptions: [],
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const embed = new MessageEmbed();
    embed
      .setTitle("<a:milk_bow:877947450332184706> Here is my link")
      .setColor("#2EFFFF")
      .setFooter(
        `Requested by: ${message.author.username}`,
        message.author.displayAvatarURL()
      );

    const invite = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Invite Link!")
        .setStyle("LINK")
        .setEmoji("<:astro:880854053461037077>")
        .setURL(
          "https://discord.com/api/oauth2/authorize?client_id=838472584793423895&permissions=8&scope=bot%20applications.commands"
        )
    );

    // const server = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setLabel("Support server")
    //     .setStyle("LINK")
    //     .setURL("SERVER LINKS")
    // );

    message.reply({ components: [invite], embeds: [embed] });
  },
});
