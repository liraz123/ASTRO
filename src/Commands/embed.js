/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "embed",
    description: "",
    async run(message, args, client) {
        let questions = {
            firstQuestion: "What do you want to add in embed's title?",
            secondQuestion: "Type the description that you want in the embed!",
            thirdQuestion: "Type the color you want to be on the embed!",
            fourthQuestion: "What do you want its footer to be?",
        }

        message.channel.send(questions.firstQuestion).then(message => {
            const filter1 = m => m.author.id === message.author.id
            message.channel.awaitMessages(filter1, {
                max: 1,
                time: 5 * 60000
            }).then(message => {
                let message1 = message.first().content
                if (message1.toUpperCase() == "cancel") return message.channel.send("Ok, I have cancelled this process")
                message.channel.send(questions.secondQuestion).then(message => {
                    const filter1 = m => m.author.id === message.author.id
                    message.channel.awaitMessage(filter1, {
                        time: 5 * 60000,
                        max: 1
                    }).then(message => {
                        let message2 = message.first().content
                        if (message2.toUpperCase() == "cancel") return message.channel.send("Ok, I have cancelled this process")
                        message.channel.send(questions.thirdQuestion).then(message => {
                            const filter1 = m => m.author.id === message.author.id
                            message.channel.awaitMessage(filter1, {
                                time: 5 * 60000,
                                max: 1
                            }).then(message => {
                                let message3 = message.first().content.toUpperCase()
                                if (message3.toUpperCase() == "cancel") return message.channel.send("Ok, I have cancelled this process")
                                message.channel.send(questions.fourthQuestion).then(message => {
                                    const filter1 = m => m.author.id === message.author.id
                                    message.channel.awaitMessage(filter1, {
                                        time: 5 * 60000,
                                        max: 1
                                    }).then(message => {
                                        let message4 = message.first().content
                                        if (message4.toUpperCase() == "cancel") return message.channel.send("Ok, I have cancelled this process")

                                        const embed = new Discord.MessageEmbed();
                                        embed.setTitle(message1)
                                            .setDescription(message2)
                                            .setColor(message3)
                                            .setFooter(message4)
                                        message.channel.send({
                                            embeds: [embed]
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
});