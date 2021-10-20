const Command = require("../../Structures/Command.js");

const { MessageEmbed, CommandInteraction } = require("discord.js");

module.exports = new Command({
  name: "serverinfo",
  description: "Shows info about the server",
  permission: "SEND_MESSAGES",
  type: "BOTH",
  slashCommandOptions: [],
  async run(message, args, client) {
    const member =
      message instanceof CommandInteraction
        ? message.guild.members.cache.find((m) => m.id === message.user.id)
        : message.member;
    const emojicount = message.guild.emojis.cache;
    const roles = message.guild.roles.cache
      .filter((r) => r.id !== message.guild.id)
      .map((role) => role.toString());
    const create = message.guild.createdAt.toLocaleDateString();
    const channels = message.guild.channels.cache;

    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setThumbnail(
            message.guild.iconURL({ dynamic: true })
              ? message.guild.iconURL({ dynamic: true })
              : `https://guild-default-icon.herokuapp.com/${message.guild.nameAcronym}`
          )
          .addFields(
            {
              name: `<a:ar:878262605154766899> **INFORMATION**`,
              value: `**Server Name:** \`${
                message.guild.name
              }\`\n**Server Id:** \`${message.guild.id}\`\n**Owner Name:** \`${
                (await message.guild.fetchOwner()).user.username
              }\`\n**Owner id:** \`${await message.guild.ownerId}\`\n`,
            },
            {
              name: `<a:ar:878262605154766899> **COUNT**`,
              value: `**Members:** \`${message.guild.memberCount.toString()}\`\n**Roles:**: \`${
                roles.length
              }\`\n**Channels:** \`${
                channels.size
              }\`\n**Text Channels:** \`${message.guild.channels.cache
                .filter((channel) => channel.type === "GUILD_TEXT")
                .size.toString()}\`\n**Voice Channels:** \`${message.guild.channels.cache
                .filter((channel) => channel.type === "GUILD_VOICE")
                .size.toString()}\`\n**Emojis:** \`${emojicount.size}\`\n`,
            },
            {
              name: `<a:ar:878262605154766899> **ADDITIONAL INFORMATION**`,
              value: `**Created At:** \`${create}\`\n**Boost Count** \`${
                message.guild.premiumSubscriptionCount
              }\`\n**Boost Level** \`${message.guild.premiumTier.toString()}\`\n**Verification Level** \`${message.guild.verificationLevel.toString()}\`\n`,
            }
          )

          .setColor("BLUE")
          .setFooter(
            `Requested by: ${member.user.tag}`,
            member.user.displayAvatarURL({ dynamic: true })
          ),
      ],
    });
  },
});
