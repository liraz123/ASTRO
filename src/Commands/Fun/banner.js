/** @format */

const Command = require("../../Structures/Command.js");

const Discord = require("discord.js");

const axios = require("axios")

module.exports = new Command({
    name: "banner",
    description: "Shows banner of a User.",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.member;
            
        axios.get(`https://discord.com/api/users/${user.user.id}`, {
                headers: {
                    Authorization: `Bot ${client.token}`,
                },
            })
            .then((res) => {
                const {
                    banner,
                    accent_color
                } = res.data;

                if (banner) {
                    const extension = banner.startsWith("a_") ? ".gif" : ".png";
                    const url = `https://cdn.discordapp.com/banners/${user.user.id}/${banner}${extension}`;

                    const embed = new Discord.MessageEmbed();
                    embed.setDescription(`**${user.user.tag}**'s banner`)
                        .setImage(url);

                    message.channel.send({
                        embeds: [embed]
                    });
                } else {
                    if (accent_color) {
                        const embed = new Discord.MessageEmbed();
                        embed.setDescription(`**${user.user.tag}** dosen't have a banner but they do have a accent color`)
                            .setColor(accent_color);
                        message.channel.send({
                            embeds: [embed]
                        })
                    } else return message.reply(`**${user.user.tag}** does not have a banner nor a accent color!`);
                }
            })
    }
});