const Command = require("../Structures/Command.js");

const fetch = require("node-fetch");

module.exports = new Command({
  name: "emojify",
  description: "",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const text = args.slice(1).join(" ");

    const data = await fetch(`https://casey.gg/api/emojify?text=${text}`).then(
      (res) => res.json()
    );

    return message.channel.send(data.result);
  },
});
