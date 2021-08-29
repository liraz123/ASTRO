/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "say",
    description: "Repeat whatever the user says!",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        if (args.slice(1).length > 0) return message.reply(args.slice(1).join(" "));
            else 
        message.reply('<a:warn_:878917634668781629> You did not send a message to repeat, cancelling command.')
    }
});