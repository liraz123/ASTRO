/** @format */

const Event = require("../Structures/Event.js");

const Discord = require("discord.js");

module.exports = new Event("guildMemberAdd", (client, member) => {
	const channel = member.guild.channels.cache.find(
		c => c.name == "welcome"
	);

	if (!channel) return;

	const embed = new Discord.MessageEmbed();

	embed
		.setTitle("New Member")
		.setColor("#00ff00")
		.setAuthor(member.user.tag)
		.setThumbnail(member.user.avatarURL({
			dynamic: true
		}))
		.addFields({
			name: "Account Created",
			value: member.user.createdAt.toLocaleDateString('en-us'),
			inline: true
		}, {
			name: "User Joined",
			value: member.joinedAt.toLocaleTimeString('en-us'),
			inline: true
		})
		.setTimestamp(member.joinedTimestamp);

	channel.send({
		embeds: [embed]
	});
});