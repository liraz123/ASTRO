/** @format */

const Command = require("../Structures/Command.js");

const Meme = require("memer-api");

const memer = new Meme("XFIRyTIIh9a");

const Discord = require("discord.js");

module.exports = new Command({
  name: "tweet",
  description: "Make fake tweet to troll your friend",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const avatar = message.author.displayAvatarURL({ dynamic: false });

    const text = args.slice(1).join(" ");

    if (!text) return message.reply(`Please provide a text.`);

    const username = message.author.username;

    memer.tweet(avatar, username, text).then((image) => {
      var attachment = new Discord.MessageAttachment(image, "tweet.png");
      const embed = new Discord.MessageEmbed()
        .setTitle("Tweeted!")
        .setImage("attachment://tweet.png")
        .setColor("RANDOM")
        .setFooter(`${message.author.username}`, avatar)
        .setTimestamp();
      message.channel.send({ embeds: [embed], files: [attachment] });
    });
  },
});
