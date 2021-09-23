/** @format */

//.addField(`${p}\`\``, "")

const paginationEmbed = require("discordjs-button-pagination");

const Command = require("../../Structures/Command.js");

const { MessageEmbed, MessageButton } = require("discord.js");

module.exports = new Command({
  name: "help",
  description: "Help command",
  type: "BOTH",
  slashCommandOptions: [],
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    let p = "<:plus_pre:887344481324638218>";
    let descript = `**Prefix <:plus_pre:887344481324638218>**`;

    const Help = new MessageEmbed()
      .setColor("#00FF00")
      .setTitle("Help menu")
      .setDescription(descript)
      .addField(
        "**Pages**",
        "**1.** __**Fun**__ \n **2.** __**Informations**__ \n **3.** __**Moderation**__"
      )
      .addField(
        "**Navigation Help**",
        "Use the arrow Below to look through the pages"
      )
      .setTimestamp();

    const Fun = new MessageEmbed()
      .setColor("#00FF00") // could change colors later but yeah :D
      .setTitle("Fun")
      .setDescription(descript)
      .addField(`${p}\`avatar\``, "**Shows your or mentioned user avatar.**")
      .addField(`${p}\`banner\``, "**Shows your or mentioned user banner.**")
      .addField(`${p}\`memes\``, "**Enjoy memes.**")
      .addField(`${p}\`say\``, "**Repeat whatever you say.**")
      .addField(`${p}\`dog\``, "**Shows image and facts about cat.**")
      .addField(`${p}\`cat\``, "**Shows image and facts about dog.**")
      .addField(`${p}\`coolrate\``, "**Test how cool you are.**")
      .addField(`${p}\`hack\``, "**Troll your friends by fake hacking.**")
      .addField(`${p}\`connect4\``, "**Play connect4 with any user.**")
      .addField(`${p}\`snake\``, "**Play snake game.**")
      .addField(
        `${p}\`color\``,
        "**Shows the color of the hex color provided.**"
      )
      .addField(`${p}\`tweet\``, "**Make fake tweets to troll your friends.**")
      .setTimestamp();

    const Information = new MessageEmbed()
      .setColor("#00FF00")
      .setTitle("Informations")
      .setDescription(descript)
      .addField(
        `${p}\`userinfo\``,
        "**Shows info about you or mentioned user.**"
      )
      .addField(
        `${p}\`ping\``,
        "**Checks connectivity with discord's servers.**"
      )
      .addField(`${p}\`serverinfo\``, "**Shows info about the server.**")
      .setTimestamp();

    const Moderation = new MessageEmbed()
      .setColor("#00FF00")
      .setTitle("Moderation")
      .setDescription(descript)
      .addField(`${p}\`clear\``, "**Clears an amount of messages.**")
      .setTimestamp();

    const button1 = new MessageButton()
      .setCustomId("previousbtn")
      .setLabel("PRE")
      .setStyle("DANGER");

    const button2 = new MessageButton()
      .setCustomId("nextbtn")
      .setLabel("NXT")
      .setStyle("SUCCESS");

    const pages = [Help, Fun, Information, Moderation];

    const buttonList = [button1, button2];

    paginationEmbed(message, pages, buttonList);
  },
});
