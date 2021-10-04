const Discord = require("discord.js");

const Command = require("../Structures/Command.js");

const https = require("https");

const url = "https://www.reddit.com/r/meme/.json?limit=100";

module.exports = new Command({
  name: "meme",
  description: "",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    https.get(url, (result) => {
      var body = "";
      result.on("data", (chunk) => {
        body += chunk;
      });

      result
        .on("end", () => {
          var response = JSON.parse(body);
          var index =
            response.data.children[Math.floor(Math.random() * 99) + 1].data;

          if (index.post_hint !== "image") {
            var text = index.selftext;
            const textembed = new Discord.MessageEmbed()
              .setTitle(subRedditName)
              .setColor(9384170)
              .setDescription(`[${title}](${link})\n\n${text}`)
              .setURL(`https://reddit.com/${subRedditName}`);

            message.channel.send({ embeds: [textembed] });
          }

          var image = index.preview.images[0].source.url.replace("&amp;", "&");
          var title = index.title;
          var link = "https://reddit.com" + index.permalink;
          var subRedditName = index.subreddit_name_prefixed;

          if (index.post_hint !== "image") {
            const textembed = new Discord.RichEmbed()
              .setTitle(subRedditName)
              .setColor(9384170)
              .setDescription(`[${title}](${link})\n\n${text}`)
              .setURL(`https://reddit.com/${subRedditName}`);

            message.channel.send({ embeds: [textembed] });
          }
          const imageembed = new Discord.MessageEmbed()
            .setTitle(subRedditName)
            .setImage(image)
            .setColor(9384170)
            .setDescription(`[${title}](${link})`)
            .setURL(`https://reddit.com/${subRedditName}`);
          message.channel.send({ embeds: [imageembed] });
        })
        .on("error", function (e) {
          console.log("Got an error: ", e);
        });
    });
  },
});
