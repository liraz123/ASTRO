/** @format */

const Event = require("../Structures/Event.js");

const Canvas = require("canvas");

const { MessageAttachment, MessageEmbed } = require("discord.js");

module.exports = new Event("guildMemberAdd", async (client, member) => {
  Canvas.registerFont( "AZONIX.otf",{ family: "lbold" });
  const applyText = (canvas, text) => {
    const context = canvas.getContext("2d");
    let fontSize = 70;

    do {
      context.font = `${(fontSize -= 10)}px sans-serif`;
    } while (context.measureText(text).width > canvas.width - 300);

    return context.font;
  };

  const channel = member.guild.channels.cache.find(
    (c) => c.name == "👋・joins-leaves"
  );

  if (!channel) return;

  const canvas = Canvas.createCanvas(700, 250);
  const context = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/799322908836757525/896257609064124426/New_Project_1.png"
  );
  context.drawImage(background, 0, 0, canvas.width, canvas.height);

  context.font = "20px lbold";
  context.fillStyle = "#ffffff";
  context.fillText(
    `Welcome to ${member.guild.name} support server!`,
    canvas.width / 3.5,
    canvas.height / 3.5
  );

  context.font = "50px lbold";
  context.fillStyle = "#ffffff";
  context.fillText(
    `${member.displayName}`,
    canvas.width / 3.0,
    canvas.height /1.8
  );

  context.font = " 33px lbold";
  context.fillStyle = "#FFFFFF";
  context.fillText(
    `YOU ARE ${member.guild.memberCount}th MEMBER`,
    canvas.width / 3.3,
    canvas.height / 1.3
  );

  context.beginPath();
  context.arc(105, 130, 80, 0, Math.PI * 2, true);
  context.strokeStyle = "#ffffff";
  context.lineWidth = 6;
  context.stroke();
  context.save();
  context.closePath();
  context.clip();

  const avatar = await Canvas.loadImage(
    member.user.displayAvatarURL({ format: "png" })
  );
  context.drawImage(avatar, 25, 50, 175, 175);

  const attachment = new MessageAttachment(
    canvas.toBuffer(),
    "welcome-image.png"
  );

  const embed = new MessageEmbed()
    .setTitle(`welcome to the server, ${member.user.username}!`)
    .setImage("attachment://welcome-image.png")
    .setColor("RANDOM");
  channel.send({ embeds: [embed], files: [attachment] });
});
