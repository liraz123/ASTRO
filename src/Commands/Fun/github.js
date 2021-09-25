const Command = require("../../Structures/Command");

const fetch = require("node-fetch");

const Discord = require("discord.js");

module.exports = new Command({
  name: "github",
  description: "Shows the profile of any github user",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const user = args.slice(1).join(" ");

    if(!args.slice(1).length > 0) return message.reply("Missing username!");

    fetch(`https://luminabot.xyz/api/json/github?username=${user}`)
      .then((r) => r.json())
      .then((f) => {
        const embed = new Discord.MessageEmbed()
          .setTitle(`Username: ${f.name}`)
          .setDescription(`[Github link](${f.url}), email: ${f.email}`)
          .setThumbnail(f.avatar)
          .addField(`Company`, `${f.company}`, true)
          .addField(`Bio`, `${f.bio}`, true)
          .addField(`Location`, `${f.location}`, true)
          .addField(`Blog`, `${f.blog}`, true)
          .addField(`Twitter`, `${f.twitter}`, true)
          .addField(`Followers`, `${f.followers}`, true)
          .addField(`Following`, `${f.following}`, true)
          .addField(`Public repos`, `${f.public_repos}`, true)
          .addField(`Public gists`, `${f.public_gists}`, true)
          .setFooter(`Acc created: ${f.created_at}`);
        message.channel.send({ embeds: [embed] });
      });
  },
});
