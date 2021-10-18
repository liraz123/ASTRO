const Command = require("../../Structures/Command");

module.exports = new Command({
  name: "bal",
  description: "",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;
    const targetId = user.user.id;
  },
});
