const paginationEmbed = require("discordjs-button-pagination");

const { MessageEmbed, MessageButton } = require("discord.js");

const fetch = require("node-fetch");

const Command = require("../../Structures/Command.js");

module.exports = new Command({
  name: "news",
  aliases: ["top5", "globalnews"],
  description: "",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    message.channel.sendTyping();
    const news_API = "0d73bdb2fc484029a61eed231d38d207";

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_API}`
    );
    const noob = await response.json();
    const embed1 = new MessageEmbed()

      .setTitle(`🌐Top 1st News - ${noob.articles[0].title}`)
      .setDescription(
        `**${noob.articles[0].description}** \n \n **Content : ${noob.articles[0].content}** \n \n 📚Read More [Here](${noob.articles[0].url}) \n *News Published At : ${noob.articles[0].publishedAt}*`
      )
      .setImage(`${noob.articles[0].urlToImage}`)
      .setColor("#2F3136");
    const embed2 = new MessageEmbed()
      .setTitle(`🌐Top 2nd News - ${noob.articles[1].title}`)
      .setDescription(
        `**${noob.articles[1].description}** \n \n **Content : ${noob.articles[1].content}** \n \n 📚Read More [Here](${noob.articles[1].url}) \n *News Published At : ${noob.articles[1].publishedAt}*`
      )
      .setImage(`${noob.articles[1].urlToImage}`)
      .setColor("#2F3136");
    const embed3 = new MessageEmbed()
      .setTitle(`🌐Top 3rd News - ${noob.articles[2].title}`)
      .setDescription(
        `**${noob.articles[2].description}** \n \n **Content : ${noob.articles[2].content}** \n \n 📚Read More [Here](${noob.articles[2].url}) \n *News Published At : ${noob.articles[2].publishedAt}*`
      )
      .setImage(`${noob.articles[2].urlToImage}`)
      .setColor("#2F3136");
    const embed4 = new MessageEmbed()
      .setTitle(`🌐Top 4rth News - ${noob.articles[3].title}`)
      .setDescription(
        `**${noob.articles[3].description}** \n \n **Content : ${noob.articles[3].content}** \n \n 📚Read More [Here](${noob.articles[3].url}) \n *News Published At : ${noob.articles[3].publishedAt}*`
      )
      .setImage(`${noob.articles[3].urlToImage}`)
      .setColor("#2F3136");
    const embed5 = new MessageEmbed()
      .setTitle(`🌐Top 5th News - ${noob.articles[4].title}`)
      .setDescription(
        `**${noob.articles[4].description}** \n \n **Content : ${noob.articles[4].content}** \n \n 📚Read More [Here](${noob.articles[4].url}) \n *News Published At : ${noob.articles[4].publishedAt}*`
      )
      .setImage(`${noob.articles[4].urlToImage}`)
      .setColor("#2F3136");
    const button1 = new MessageButton()
      .setCustomId("previousbtn")
      .setLabel("Previous")
      .setStyle("DANGER");
    const button2 = new MessageButton()
      .setCustomId("nextbtn")
      .setLabel("Next")
      .setStyle("SUCCESS");
    buttonList = [button1, button2];
    embedList = [embed1, embed2, embed3, embed4, embed5];
    const timeout = 1000000;

    message.channel.send(`**HERE ARE THE TOP 5 NEWS FOR TODAY**`);
    paginationEmbed(message, embedList, buttonList, timeout);
  },
});
