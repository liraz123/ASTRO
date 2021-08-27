/** @format */

const Command = require("../Structures/Command");

module.exports = new Command({
    name: "clear",
    description: "Clear an amount of messages",
    type: "BOTH",
    slashCommandOptions: [{
        name: "amount",
        description: "The amount of messages to clear",
        type: "INTEGER",
        required: true
    }],
    permission: "MANAGE_MESSAGES",
    async run(message, args, client) {
        const amount = args[1];

        if (!amount || isNaN(amount))
            return message.reply(
                `${
					amount == undefined ? "Nothing" : amount
				} is not a valid number!`
            );

        const amountParsed = parseInt(amount);

        if (amountParsed > 100)
            return message.reply("<a:warn_:878917634668781629> You cannot clear more than 100 messages!");

        message.channel.bulkDelete(amountParsed);

        const msg = await message.reply(
            `<a:ticks:877944906486808596> Cleared ${amountParsed} message! <a:ticks:877944906486808596>`
        );



        if (msg) setTimeout(() => msg.delete(), 1666);
    }
});