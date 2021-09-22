/** @format */

const Command = require("../../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "invite",
    description: "Gives invite link to invite bot in your server.",
	type: "BOTH",
	slashCommandOptions: [],
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        embed.setDescription("<a:milk_bow:877947450332184706>[__**Here is the link**__](https://discord.com/api/oauth2/authorize?client_id=838472584793423895&permissions=8&scope=bot%20applications.commands)")
            .setColor("#0000FF");
        message.reply({
            embeds: [embed]
        })
    }
});