/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "userinfo",
    description: "Shows info about the user.",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {

        let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.member;

        let status;
        switch (user.presence.status) {
            case 'online':
                status = '🟢 Online';
                break;
            case 'dnd':
                status = '🔴 DND [Do Not Disturb]';
                break;
            case 'idle':
                status = '🟡 Idle';
                
                break;
            case 'offline':
                status = '⚫ Offline';
                break;
        }

        const embed = new Discord.MessageEmbed();
        embed.setTitle(`${user.user.username} Info`)
            .setColor(`#00FF00`)
            .setThumbnail(user.user.displayAvatarURL({
                dynamic: true
            }))
            .addFields({
                name: '👥 Name 🏷️ ',
                value: `<a:ar:878262605154766899> ${user.user.username}`,
                inline: true
            }, {
                name: '#️⃣ Discriminator',
                value: `<a:ar:878262605154766899> #${user.user.discriminator}`,
                inline: true
            }, {
                name: '🆔 ID',
                value: `<a:ar:878262605154766899> ${user.user.id}`
            }, {
                name: 'Current Status',
                value: `<a:ar:878262605154766899> ${status}`,
                inline: true
            }, {
                name: '🎧 Activity ⛹️',
                value: `<a:ar:878262605154766899> ${
                    user.presence.activities[0]
                        ? user.presence.activities[0].name
                        : `User isn't playing a game!`
                }`,
                inline: true
            }, {
                name: '📑 Account created',
                value: `<a:ar:878262605154766899> ${user.user.createdAt.toLocaleDateString(
                    'en-us'
                )}`,
                inline: true
            }, {
                name: '🖇️ Joined Date 🗓️ ',
                value: `<a:ar:878262605154766899> ${user.joinedAt.toLocaleDateString(
                    'en-us'
                )}`,
                inline: true
            }, {
                name: '🟥 User Roles 🟦',
                value: user.roles.cache.map(role => role.toString()).join('\n'),
                inline: true
            });

        message.channel.send({
            embeds: [embed]
        });
    }
});