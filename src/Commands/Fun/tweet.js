/** @format */

const Command = require("../../Structures/Command.js");

const Discord = require("discord.js");

const fetch = require('node-fetch');

module.exports = new Command({
    name: "tweet",
    description: "Make tweet to troll your friend",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${encodeURIComponent(message.author.username)}&text=${encodeURIComponent(args.slice(1).join(" "))}`)
            .then((res) => res.json())
            .then((data) => {
                let embed = new Discord.MessageEmbed();
                embed.setTitle("Tweet!")
                    .setColor(`#00FF00`)
                    .setImage(data.message)
                    .setTimestamp();
                message.channel.send({
                    embeds: [embed]
                });
            });
    }
});