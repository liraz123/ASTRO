/** @format */

const Event = require("../Structures/Event.js");

const { MessageAttachment } = require("discord.js");

module.exports = new Event("guildMemberAdd", async (member) => {
  const channel = member.guild.channels.cache.find(
    (c) => c.id == "883289559222329384"
  );

  if (!channel) return;

  const ava = member.user.displayAvatarURL({ dynamic: false , format: "png" });

  const image = `https://api.popcat.xyz/welcomecard?background=https://cdn.discordapp.com/attachments/891661470885113859/896119046599241758/milky-way-2695569__480.png&text1=${member.user.tag}&text2=Welcome+To+${member.guild.name}+server!&text3=Member+${member.guild.memberCount}&avatar=${ava}`;
  var att = new MessageAttachment(image, "-.png");
  channel.send({
    content: `<a:welc:878943272234520576><a:come:878943268602265600> ${member.user.tag}`,
    files: [att],
  });
});
