const Command = require("../../Structures/Command.js");

const Discord = require("discord.js");

const {
    e
} = require("mathjs");

module.exports = new Command({
    name: "emojis",
    description: "View all emojis in the guild",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const charactersPerMessage = 1994;
        let emojis = message.guild.emojis.cache.filter(emoji => !emoji.animated).map((e) => `${e}`).join(' ');
        let animatedEmojis = message.guild.emojis.cache.filter(emoji => emoji.animated).map((e) => `${e}`).join(' ');
        const numberOfMessages = Math.ceil(emojis.length / charactersPerMessage);
        const embed = new Discord.MessageEmbed()
        embed.setTitle(`SERVER EMOJI`)
            .setColor('#000000')
            .addFields({
                name: '__STANDARD EMOJIS__',
                value: `${emojis.slice()} `
            }, {
                name: '__ANIMATED EMOJIS__',
                value: `${animatedEmojis.slice()}`
            })
            .setFooter(`${message.guild.emojis.cache.size} emojis total`);
        message.channel.send({
            embeds: [embed]
        })
    },
});