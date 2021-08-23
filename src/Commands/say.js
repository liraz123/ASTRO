/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "say",
	description: "Repeat whatever the user says!",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        message.reply(args.slice(1).join(" "));
    }
});