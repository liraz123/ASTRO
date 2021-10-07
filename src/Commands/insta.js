const Command = require("../Structures/Command");

const fetch = require("node-fetch");

const { MessageEmbed } = require("discord.js");

module.exports = new Command({
  name: "insta",
  description: "",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const name = args.slice(1).join(" ");
    if (!name)
      return message.reply("Give a username!").then((m) => {
        m.delete(5000);
      });

    const url = `https://instagram.com/${name}/?__a=1`;
    const res = await fetch(url).then((url) => url.json());

    const account = res.graphql.user;

    if (!account.username) {
      return message
        .reply("I couldn't find any account with that username...")
        .then((m) => m.delete(5000));
    }

    const embed = new MessageEmbed()
      .setTitle(
        `${account.full_name} ${
          account.is_verified ? "<a:Verified:895571064606822460>" : " "
        }`
      )
      .setURL(account.external_url_linkshimmed)
      .setThumbnail(account.profile_pic_url_hd)
      .addField(
        `Profile Information`,
        `▸ \`Username\`: **${account.username}**
        ▸ \`Full name\`: **${account.full_name}**
        ▸ \`Bio\`: **${
          account.biography.length == 0 ? "none" : account.biography
        }**
        ▸ \`Posts\`: **${account.edge_owner_to_timeline_media.count}**
        ▸ \`Followers\`: **${account.edge_followed_by.count}**
        ▸ \`Following\`: **${account.edge_follow.count}**
        ▸ \`Private account\`: **${account.is_private ? "Yes 🔒" : "Nope 🔓"}**`
      );
    message.channel.send({ embeds: [embed] });
  },
});
