/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "hello",
    description: "Shows avatar of a User.",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.member;

            message.reply(`Hello ${user.user.tag}`)
    }
});