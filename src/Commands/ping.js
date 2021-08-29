/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "ping",
	description: "Shows the ping of the bot!",
	type: "BOTH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		let circles = {
            green: "<a:greendot:878918064161308722>",
            yellow: "<a:reddot:878918059555962890>",
            red: "<a:reddot:878918059555962890>"
        }
		message.reply(`> **PING:** ${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`);
	}
});
