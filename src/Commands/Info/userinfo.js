/** @format */

const Command = require("../../Structures/Command.js");

const moment = require("moment");
require("moment-duration-format");

const { MessageEmbed } = require("discord.js");

module.exports = new Command({
  name: "userinfo",
  description: "Shows info about the user.",
  permission: "SEND_MESSAGES",
  aliases: ["whois", "who"],
  async run(message, args, client) {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let userStatm;
    let userStat = user.presence.status;

    let userRoles = user.roles.cache
      .map((x) => x)
      .filter((z) => z.name !== "@everyone");

    if (userRoles.length > 100) {
      userRoles = "More than 100";
    }

    let safe = message.author.createdTimestamp;

    if (safe > 604800017) {
      safe = "`Not Suspicious` <:online2:891613501326524446>";
    } else {
      safe = "`Suspicious` <:dnd:891613707266846720>";
    }

    if (userStat === "online") userStatm = `<:online:889924000325697596> `;
    if (userStat === "offline") userStatm = `<:offline:889924075479269456> `;
    if (userStat === "idle") userStatm = `<:statusidle:891614334617280542>`;
    if (userStat === "dnd")
      userStatm = `Do not disturb <:dnd:891613707266846720>`;

    let nitroBadge = user.user.avatarURL({ dynamic: true });
    let flags = user.user.flags.toArray().join(``);

    if (!flags) {
      flags = "None";
    }

    flags = flags.replace(
      "HOUSE_BRAVERY",
      "• <:hypesquad_bravery:891614818358935554>`HypeSquad Bravery`"
    );
    flags = flags.replace(
      "EARLY_SUPPORTER",
      "• <:earlysupporter:891614969907540018> `Early Supporter`"
    );
    flags = flags.replace(
      "VERIFIED_DEVELOPER",
      "• <:verified:891615196131500062>  `Verified Bot Developer`"
    );
    flags = flags.replace(
      "EARLY_VERIFIED_DEVELOPER",
      "• <:verified:891615196131500062> `Verified Bot Developer`"
    );
    flags = flags.replace(
      "HOUSE_BRILLIANCE",
      "• <:hypesquad_brilliance:891615579075674163> `HypeSquad Brilliance`"
    );
    flags = flags.replace(
      "HOUSE_BALANCE",
      "• <:hypesquad_balance:891615798219661322>`HypeSquad Balance`"
    );
    flags = flags.replace(
      "DISCORD_PARTNER",
      "• <:partnerbadge:891615958056173628> `Partner`"
    );
    flags = flags.replace(
      "HYPESQUAD_EVENTS",
      "• <:events:891616123190128660> `Hypesquad Events`"
    );
    flags = flags.replace(
      "DISCORD_CLASSIC",
      "• <:nitro:891616269260955658> `Discord Classic`"
    );

    if (nitroBadge.includes("gif")) {
      flags =
        flags +
        `
              • <:boost:891616400672706600>  \`Nitro\``;
    }

    let stat = user.presence.activities[0];
    let custom;

    if (user.presence.activities.some((r) => r.name === "Spotify")) {
      custom = "Listening to Spotify";
    } else if (stat && stat.name !== "Custom Status") {
      custom = stat.name;
    } else {
      custom = "None";
    }

    if (
      user.presence.activities.some((r) => r.name !== "Spotify") &&
      stat &&
      stat.state !== null
    ) {
      stat = stat.state;
    } else {
      stat = "None";
    }

    const embeddd = new MessageEmbed()
      .setColor(`DARK_BUT_NOT_BLACK`)
      .setAuthor(
        message.author.tag,
        message.author.avatarURL({ dynamic: true })
      )
      .setDescription(
        `__**User Info**__
              **•** \`ID:\` **${user.id}**
              **•** \`Profile:\` **${user}**
              **•** \`Bot:\` **${user.user.bot ? "Yes" : "No"}**
              **•** \`Created At:\` **${moment(user.user.createdAt).format(
                "MMMM Do YYYY, H:mm:ss a"
              )}**
              __**Member Info**__
              **•** \`Nickname:\` **${
                user.displayName ? user.displayName : "yok"
              } **
              **•** \`Joined At:\` **${moment(user.joinedAt).format(
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
      .setThumbnail(user.user.avatarURL({ dynamic: true }))
      .setTimestamp();

    message.channel.send({ embeds: [embeddd] });
  },
});
