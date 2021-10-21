const { MessageActionRow, MessageSelectMenu } = require("discord.js");

const Discord = require("discord.js");

const Command = require("../../Structures/Command.js");
module.exports = new Command({
  name: "help",
  description: "Shows info about commands",
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
            emoji: "<:INFO:893815758344323083>",
          },
          {
            label: "Fun",
            description: "Click here to see all the Cool/Fun Commands",
            value: "second",
            emoji: "<a:rollhappy:878925779575128074>",
          },
          {
            label: "Moderation",
            description: "Click here to get all the Moderation Commands",
            value: "third",
            emoji: "<:modBadge:891763544629076078>",
          },
          {
            label: " Games",
            description: "Click me if you want Games Commands",
            value: "fourth",
            emoji: "<a:game_console:893811774971867136>",
          },
          {
            label: " Action",
            description: "Click me if you want Action Commands",
            value: "fifth",
            emoji: "<a:pat_pat:887049600723189760>",
          },
          {
            label: " Music",
            description: "Click me if you want Music Commands",
            value: "sixth",
            emoji: "<a:music:900672079765057546>",
          },
        ])
    );

    let embed = new Discord.MessageEmbed();

    embed

      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor("#00FF1E")
      .setTitle("Help Info Page")
      .addFields(
        {
          name: "Information",
          value:
            "Welcome to **ASTRO** help info page where you can find \nall the available commands that the bot could perform.\n`Slash commands` are also available! :smile:",
        },
        // {
        //   name: "More Info",
        //   value:
        //     "For More Information about **each** command \ntry using the `!helpinfo` Command",
        // },
        {
          name: "Default Prefix",
          value: "<:minus_pre:887344481328832542>`help`",
        }
      )
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL());

    let sendmsg = await message.channel.send({
      embeds: [embed],
      components: [row],
    });

    let embed1 = new Discord.MessageEmbed()

      .setAuthor(message.author.tag, message.author.displayAvatarURL())
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
            "`ping` | `embed` | `userinfo` | `stats` | `uptime` | `help` | `helpinfo` | `serverinfo` | `emojis` | `invite`",
        }

        // {
        //   name: "More Information ",
        //   value:
        //     "For more **Information** please check out the `!helpinfo` Command",
        // }
      )
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL());

    let embed2 = new Discord.MessageEmbed()

      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor("#ffd700")
      .setTitle("**Welcome** to the `Fun` section")
      .addFields(
        {
          name: "Fun Page",
          value: "**Fun** Commands are used to `` with your friends",
        },

        {
          name: "Commands",
          value:
            "`meme` | `say` | `dog`  | `cat` | `tweet` | `animeQuote` | `quote` | `weather` | `achievement` | `avatar` | `banner` | `emojify` | `fact` | `meme` | `insta`",
        }

        // {
        //   name: "More Information ",
        //   value:
        //     "For more **Information** please check out the `!helpinfo` Command",
        // }
      )
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL());

    let embed3 = new Discord.MessageEmbed()

      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor("#00c8ff")
      .setTitle("**Welcome** to the `Moderation` section")
      .addFields(
        {
          name: "Moderation Page",
          value:
            "**Moderation** Commands are intentionally used to keep your server **Safe**.",
        },

        {
          name: "Commands",
          value: "`clear` | `snipe`",
        }
        // {
        //   name: "More Information ",
        //   value:
        //     "For more **Information** please check out the `!helpinfo` Command",
        // }
      )
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL());

    let embed4 = new Discord.MessageEmbed()

      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor("#0000ff")
      .setTitle("**Welcome** to the `Games` section")
      .addFields(
        {
          name: "Games",
          value:
            "**Games** Commands are used to play games with the mentioned player or you can play with yourself.",
        },

        {
          name: "Commands",
          value: "`rps` | `ttt` | `connect4` | `snake` | `chess`",
        }

        // {
        //   name: "More Information ",
        //   value:
        //     "For more **Information** please check out the `!helpinfo` Command",
        // }
      )
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL());

    let embed5 = new Discord.MessageEmbed()

      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor("#f7347a")
      .setTitle("**Welcome** to the `Action` section")
      .addFields(
        {
          name: "Action",
          value:
            "**Action** Commands are used to send super cute animated gifs to mentioned user.",
        },

        {
          name: "Commands",
          value: "`wave` | `hug` | `pat` | `kill`",
        }

        // {
        //   name: "More Information ",
        //   value:
        //     "For more **Information** please check out the `!helpinfo` Command",
        // }
      )
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL());

    let embed6 = new Discord.MessageEmbed()

      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor("#d648d7")
      .setTitle("**Welcome** to the `Music` section")
      .addFields(
        {
          name: "Music",
          value: "**Music** Commands are used to listen songs on Discord VC!",
        },

        {
          name: "Commands",
          value:
            "`play` | `queue` | `nowPlaying` | `setVolume` | `skip` | `stop`",
        }

        // {
        //   name: "More Information ",
        //   value:
        //     "For more **Information** please check out the `!helpinfo` Command",
        // }
      )
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL());

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
      if (value === "fifth") {
        collected.reply({ embeds: [embed5], ephemeral: true });
      }
      if (value === "sixth") {
        collected.reply({ embeds: [embed6], ephemeral: true });
      }
    });
  },
});
