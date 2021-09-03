/** @format */

const Command = require("../Structures/Command.js");
const gamecord = require("discord-gamecord")

module.exports = new Command({
    name: "connect4",
    description: "Play connect4",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        if (!message.mentions.users.first()) return message.channel.send('**You need to mention a member to play!**')

        new gamecord.Connect4({
            message: message,
            opponent: message.mentions.users.first(),
            embed: {
                title: 'Connect 4',
                color: '#ffffff',
            },
            emojis: {
                player1: '🔵',
                player2: '🔴'
            },
            turnMessage: '{emoji} **-** Its your turn, {player}',
            winMessage: '{emoji} | **{winner}** won the game!',
            gameEndMessage: 'The game went unfinished :(',
            drawMessage: 'It was a draw!',
            askMessage: `Hey {opponent}, {challenger} challenged you for a game of Connect 4!`,
            cancelMessage: 'Looks like they refused to have a game of Connect4. \:(',
            timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
        }).startGame();
    }
})