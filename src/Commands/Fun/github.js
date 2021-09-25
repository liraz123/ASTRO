const Command = require("../../Structures/Command");

const fetch = require("node-fetch");

const Discord = require("discord.js");

module.exports = new Command({
  name: "github",
  description: "Shows the profile of any github user",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const user = args.slice(1).join(" ");

    fetch(`https://luminabot.xyz/api/json/github?username=${user}`)
      .then((r) => r.json())
      .then((f) => {
        const embed = new Discord.MessageEmbed()
          .setTitle(`${f.name} (Github link)[${f.url}]`)
          .setThumbnail(f.avatar)
          .addField(`Company`, `${f.company}`)
          .addField(`Bio`, `${f.bio}`)
          .addField(`Location`, `${f.location}`)
          .addField(`Followers`, `${f.followers}`)
          .addField(`Following`, `${f.following}`)
          .addField(`Public repos`, `${f.public_repos}`)
          .addField(`Public gists`, `${f.public_gists}`)
          .setFooter(`Acc created: ${f.created_at}`);
        message.channel.send({ embeds: [embed] });
      });
  },
});
