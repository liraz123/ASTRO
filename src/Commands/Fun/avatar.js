/** @format */

const Command = require("../../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "avatar",
    description: "Shows avatar of a User.",
    permission: "SEND_MESSAGES",
    aliases: ['av', 'pfp'],
    async run(message, args, client) {

        let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.member;

        const embed = new Discord.MessageEmbed();

        embed.setAuthor(`${user.user.tag}'s Avatar`, user.user.displayAvatarURL())
            .setColor(`#0AFFFF`)
            .setDescription(`[PNG](${user.user.displayAvatarURL({ dynamic:true, format: "png"})}) | [JPG](${user.user.displayAvatarURL({dynamic:true, format: "jpg"})}) | [GIF](${user.user.displayAvatarURL({dynamic:true, format: "gif"})}) | [WEBP](${user.user.displayAvatarURL({dynamic:true, format: "webp"})})`)
            .setImage(`${user.user.displayAvatarURL({size:2048,dynamic:true, format: "png"})}`)
            .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setTimestamp(message.createdTimestamp);
        message.channel.send({
            embeds: [embed]
        });
    }
})