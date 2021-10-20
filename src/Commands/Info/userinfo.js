/** @format */

const Command = require("../../Structures/Command.js");

const moment = require("moment");

const { MessageEmbed, CommandInteraction } = require("discord.js");

module.exports = new Command({
  name: "userinfo",
  description: "Shows info about the user.",
  permission: "SEND_MESSAGES",
  aliases: ["whois", "who"],
  type: "BOTH",
  slashCommandOptions: [
    {
      name: "user",
      description: "Shows avatar of a user.",
      type: "USER",
      required: true,
    },
  ],
  async run(message, args, client) {
    const Target =
      message instanceof CommandInteraction
        ? message.guild.members.cache.find((m) => m.id === args[1]) ||
          message.guild.members.cache.find((m) => m.id === message.user.id)
        : message.mentions.members.first() || message.member;
    const member =
      message instanceof CommandInteraction
        ? message.guild.members.cache.find((m) => m.id === message.user.id)
        : message.member;

    let userRoles = Target.roles.cache
      .map((x) => x)
      .filter((z) => z.name !== "@everyone");

    if (userRoles.length > 100) {
      userRoles = "More than 100";
    }

    let safe = member.user.createdTimestamp;

    if (safe > 604800017) {
      safe = "`Not Suspicious` <:Online:891662235380875355>";
    } else {
      safe = "`Suspicious` <:dnd:891662340431425576>";
    }

    let status;
    switch (Target.presence.status) {
      case "online":
        status = "<:Online:891662235380875355> Online";
        break;
      case "dnd":
        status = "<:dnd:891662340431425576> DND [Do Not Disturb]";
        break;
      case "idle":
        status = "<:idle:891662512276246618> Idle";

        break;
      case "offline":
        status = "<:OFFLINE:891662445746204713> Offline";
        break;
    }

    let nitroBadge = Target.user.avatarURL({ dynamic: true });
    let flags = Target.user.flags.toArray().join(``);

    if (!flags) {
      flags = "None";
    }

    flags = flags.replace(
      "HOUSE_BRAVERY",
      "• <:HypeSquadBravery:891683312547008583> `HypeSquad Bravery`"
    );
    flags = flags.replace(
      "EARLY_SUPPORTER",
      "• <:Early_Supporter:891697698363822080> `Early Supporter`"
    );
    flags = flags.replace(
      "VERIFIED_DEVELOPER",
      "• <:EARLY_VERIFIED_BOT_DEVELOPER:891696067601637417>  `Verified Bot Developer`"
    );
    flags = flags.replace(
      "EARLY_VERIFIED_DEVELOPER",
      "• <:EARLY_VERIFIED_BOT_DEVELOPER:891696067601637417> `Verified Bot Developer`"
    );
    flags = flags.replace(
      "HOUSE_BRILLIANCE",
      "• <:HypeSquadBrilliance:891683275079295047> `HypeSquad Brilliance`"
    );
    flags = flags.replace(
      "HOUSE_BALANCE",
      "• <:HypeSquadBalance:891683302564573254> `HypeSquad Balance`"
    );
    flags = flags.replace(
      "DISCORD_PARTNER",
      "• <:DiscordPartner:891695920616448012> `Partner`"
    );
    flags = flags.replace(
      "HYPESQUAD_EVENTS",
      "• <:HypesquadEvents:891697940278673479> `Hypesquad Events`"
    );
    flags = flags.replace(
      "DISCORD_CLASSIC",
      "• <:Discord_Nitro_Classic:891701674203283506> `Discord Classic`"
    );

    if (nitroBadge.includes("gif")) {
      flags =
        flags +
        `
              • <a:booster:891680883722043392> \`Nitro\``;
    }

    let stat = Target.presence.activities[0];
    let custom;

    if (Target.presence.activities.some((r) => r.name === "Spotify")) {
      custom = "Listening to Spotify";
    } else if (stat && stat.name !== "Custom Status") {
      custom = stat.name;
    } else {
      custom = "None";
    }

    if (
      Target.presence.activities.some((r) => r.name !== "Spotify") &&
      stat &&
      stat.state !== null
    ) {
      stat = stat.state;
    } else {
      stat = "None";
    }

    const embeddd = new MessageEmbed()
      .setColor(`DARK_BUT_NOT_BLACK`)
      .setAuthor(member.user.tag, member.user.avatarURL({ dynamic: true }))
      .setDescription(
        `__**User Info**__
              **•** \`ID:\` **${Target.id}**
              **•** \`Profile:\` **${Target}**
              **•** \`Current status:\` **${status}**
              **•** \`Bot:\` **${Target.user.bot ? "Yes" : "No"}**
              **•** \`Created At:\` **${moment(Target.user.createdAt).format(
                "MMMM Do YYYY, H:mm:ss a"
              )}**
              __**Member Info**__
              **•** \`Nickname:\` **${
                Target.displayName ? Target.displayName : "yok"
              } **
              **•** \`Joined At:\` **${moment(Target.joinedAt).format(
                "MMMM Do YYYY, H:mm:ss a"
              )}**
              **•** \`Activity:\` **${custom}**
              __**Roles:**__
              ${userRoles}
              __**Badge Information**__
              ${flags} 
              
              __**Suspicious Check**__
              • ${safe}`
      )
      .setThumbnail(Target.user.avatarURL({ dynamic: true }))
      .setTimestamp();

    message.reply({ embeds: [embeddd] });
  },
});
