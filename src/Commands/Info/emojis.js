const Command = require("../../Structures/Command.js");

const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = new Command({
  name: "emojis",
  description: "",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const backId = "back";
    const forwardId = "forward";
    const backButton = new MessageButton({
      style: "SECONDARY",
      label: "Back",
      emoji: "⬅️",
      customId: backId,
    });
    const forwardButton = new MessageButton({
      style: "SECONDARY",
      label: "Forward",
      emoji: "➡️",
      customId: forwardId,
    });

    // Put the following code wherever you want to send the embed pages:

    const { author, channel } = message;
    const emoji = [...message.guild.emojis.cache.values()];

    /**
     * Creates an embed with emoji starting from an index.
     * @param {number} start The index to start from.
     * @returns {Promise<MessageEmbed>}
     */
    const generateEmbed = async (start) => {
      const current = emoji.slice(start, start + 10);

      // You can of course customise this embed however you want
      return new MessageEmbed({
        title: `Showing emoji ${start + 1}-${start + current.length} out of ${
          emoji.length
        }`,
        fields: await Promise.all(
          current.map(async (g) => ({
            name: `**Emoji:** ${g}`,
            value: `\`:${g.name}:\``,
          }))
        ),
      });
    };

    // Send the embed with the first 10 emoji
    const canFitOnOnePage = emoji.length <= 10;
    const embedMessage = await channel.send({
      embeds: [await generateEmbed(0)],
      components: canFitOnOnePage
        ? []
        : [new MessageActionRow({ components: [forwardButton] })],
    });
    // Exit if there is only one page of emoji (no need for all of this)
    if (canFitOnOnePage) return;

    // Collect button interactions (when a user clicks a button),
    // but only when the button as clicked by the original message author
    const collector = embedMessage.createMessageComponentCollector({
      filter: ({ user }) => user.id === author.id,
    });

    let currentIndex = 0;
    collector.on("collect", async (interaction) => {
      // Increase/decrease index
      interaction.customId === backId
        ? (currentIndex -= 10)
        : (currentIndex += 10);
      // Respond to interaction by updating message with new embed
      await interaction.update({
        embeds: [await generateEmbed(currentIndex)],
        components: [
          new MessageActionRow({
            components: [
              // back button if it isn"t the start
              ...(currentIndex ? [backButton] : []),
              // forward button if it isn"t the end
              ...(currentIndex + 10 < emoji.length ? [forwardButton] : []),
            ],
          }),
        ],
      });
    });
  },
});
