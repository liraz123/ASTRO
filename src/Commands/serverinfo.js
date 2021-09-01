const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "serverinfo",
    description: "Shows info about the server",
    permission: "ADMINISTRATOR",
    async run(message, args, client) {
        const members = message.guild.members.cache;

        const embed = new Discord.MessageEmbed();
        embed.setTitle(`**SERVER INFO**`)
            .setColor(`#00FF00`)
            .setThumbnail(`${message.guild.iconURL()}`)
            .addFields({
                name: '<a:discordload:880502986890170369> Server name <a:discordload:880502986890170369>',
                value: `<a:ar:878262605154766899> ${message.guild.name} `
            }, {
                name: '<a:gcrown:880502389793259620> Owner <a:gcrown:880502389793259620>',
                value: `<a:ar:878262605154766899> <@!${message.guild.ownerId}>`
            }, {
                name: 'Members',
                value: `<a:ar:878262605154766899> Total: ${message.guild.memberCount}, Human: ${members.filter(member => !member.user.bot).size}, Bots: ${members.filter(member => member.user.bot).size}`
            }, {
                name: '📡 Channels 🛰️',
                value: `<a:ar:878262605154766899> Total: ${message.guild.channels.cache.size}, Text: ${message.guild.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size}, Voice: ${message.guild.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size}`
            }, {
                name: `Emojis`,
                value: `<a:ar:878262605154766899> Total: ${message.guild.emojis.cache.size}, Normal: ${message.guild.emojis.cache.filter(emoji => !emoji.animated).size}, Animated: ${message.guild.emojis.cache.filter(emoji => emoji.animated).size}`
            }, {
                name: 'No. of Roles',
                value: `<a:ar:878262605154766899> ${message.guild.roles.cache.size}`
            }, {
                name: 'Roles list',
                value: `${message.guild.roles.cache.map(r => `${r}`).join("\n")}`
            })
            .setFooter(`ID: ${message.guild.id}`)
            .setTimestamp(`${message.guild.createdAt}`);
        message.channel.send({
            embeds: [embed]
        });
    }
});