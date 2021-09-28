/** @format */

const { MessageActionRow, MessageSelectMenu } = require("discord.js");

const Discord = require("discord.js");

const Command = require("../../Structures/Command.js");
module.exports = new Command({
  name: "helpo",
  description: "Hello!",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("select")
        .setPlaceholder("Select your option")
        .addOptions([
          {
            label: "Information",
            description: "Click here to see all the Informative Commands",
            value: "first",
            emoji: "ℹ️",
          },
          {
            label: "Fun",
            description: "Click here to see all the Cool/Fun Commands",
            value: "second",
            emoji: "<a:HappyPanda:848937481088663552>",
          },
          {
            label: "Moderation",
            description: "Click here to get all the Moderation Commands",
            value: "third",
            emoji: "<<:modBadge:891763544629076078>",
          },
          {
            label: " Anime",
            description: "Click me if you want Anime Commands",
            value: "fourth",
            emoji: "<:anime:891343368456634448>",
          },
        ])
    );

    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let embed = new Discord.MessageEmbed();

    embed

      .setAuthor(user.user.username, user.user.displayAvatarURL())
      .setColor("#00FF1E")
      .setTitle("CinaBot Help Info Page")
      .addFields(
        {
          name: "Information",
          value:
            "Welcome to** CinnaBot** help info page where you can find \nall the available commands that the bot could perform.",
        },

        {
          name: "More Info",
          value:
            "For More Information about **each** command \ntry using the `!helpinfo` Command",
        },

        { name: "Default Prefix", value: "`!help`" }
      )
      .setTimestamp()
      .setThumbnail(user.user.displayAvatarURL())
      .setImage("");

    let sendmsg = await message.channel.send({
      content: " ",
      ephemeral: true,
      embeds: [embed],
      components: [row],
    });

    let embed1 = new Discord.MessageEmbed()

      .setAuthor(user.user.username, user.user.displayAvatarURL())
      .setColor("#00FF1E")
      .setTitle("**Welcome** to the `Information` section")
      .addFields(
        {
          name: "Information Page",
          value:
            "**Information** Commands generally show information \nabout the bot as well as show statistics on users",
        },

        {
          name: "Commands",
          value:
            "`ping` | `embed` | `userinfo` | `Botinfo` | `uptime` | `help` | `helpinfo` | `serverinfo`",
        },

        {
          name: "More Information ",
          value:
            "For more **Information** please check out the `!helpinfo` Command",
        }
      )
      .setTimestamp()
      .setThumbnail(user.user.displayAvatarURL())
      .setImage("");

    let embed2 = new Discord.MessageEmbed()

      .setAuthor(user.user.username, user.user.displayAvatarURL())
      .setColor("#ff9100")
      .setTitle("**Welcome** to the `Fun` section")
      .addFields(
        {
          name: "Fun Page",
          value:
            "**Fun** Commands are used to `Troll/ have a good time` with your friends",
        },

        {
          name: "Commands",
          value:
            "`meme` | `say` | `dog`  | `cat` | `hack` | `reverse` | `rps` | `tweet` | `ttt`",
        },

        {
          name: "More Information ",
          value:
            "For more **Information** please check out the `!helpinfo` Command",
        }
      )
      .setTimestamp()
      .setThumbnail(user.user.displayAvatarURL())
      .setImage("");

    let embed3 = new Discord.MessageEmbed()

      .setAuthor(user.user.username, user.user.displayAvatarURL())
      .setColor("#00c8ff")
      .setTitle("**Welcome** to the `Moderation` section")
      .addFields(
        {
          name: "Moderation Page",
          value:
            "**Moderation** Commands are intentionally used to keep your server **Safe**",
        },

        {
          name: "Commands",
          value: "`clear` | `setprefix`",
        },
        {
          name: "More Information ",
          value:
            "For more **Information** please check out the `!helpinfo` Command",
        }
      )
      .setTimestamp()
      .setThumbnail(user.user.displayAvatarURL())
      .setImage("");

    let embed4 = new Discord.MessageEmbed()

      .setAuthor(user.user.username, user.user.displayAvatarURL())
      .setColor("#fcba03")
      .setTitle("**Welcome** to the `Anime` section")
      .addFields(
        {
          name: "Action",
          value:
            "**Anime** Commands are used to send super cute animated gifs to mentioned user",
        },

        {
          name: "Commands",
          value: "`wave` | `hug` | `pat` | `kill`",
        },

        {
          name: "More Information ",
          value:
            "For more **Information** please check out the `!helpinfo` Command",
        }
      )
      .setTimestamp()
      .setThumbnail(user.user.displayAvatarURL());

    const collector = message.channel.createMessageComponentCollector({
      componentType: "SELECT_MENU",
    });

    collector.on("collect", async (collected) => {
      const value = collected.values[0];

      if (value === "first") {
        collected.reply({ embeds: [embed1], ephemeral: true });
      }
      if (value === "second") {
        collected.reply({ embeds: [embed2], ephemeral: true });
      }
      if (value === "third") {
        collected.reply({ embeds: [embed3], ephemeral: true });
      }
      if (value === "fourth") {
        collected.reply({ embeds: [embed4], ephemeral: true });
      }
    });
  },
});