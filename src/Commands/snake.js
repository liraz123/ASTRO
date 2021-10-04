/** @format */

const Command = require("../Structures/Command.js");
const gamecord = require("discord-gamecord");

module.exports = new Command({
  name: "snake",
  description: "Play Snake",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    new gamecord.Snake({
      message: message,
      embed: {
        title: "Snake",
        color: "#ffffff",
      },
      snake: {
        head: "🟢",
        body: "🟩",
        tail: "🟢",
      },
      emojis: {
        emojis: {
          board: "🔳",
          food: "🍎",
          up: "⬆️",
          right: "➡️",
          down: "⬇️",
          left: "⬅️",
        },
      },
      timeEndMessage: "Since the opponent didnt answer, i dropped the game!",
      gameEndMessage: "The game went unfinished :(",
    }).startGame();
  },
});
