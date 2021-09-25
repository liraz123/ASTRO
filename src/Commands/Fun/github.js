const Command = require("../../Structures/Command");

const fetch = require("node-fetch");

module.exports = new Command({
  name: "github",
  description: "Shows the profile of any github user",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const user = args.slice(1).join(" ");

    fetch(`https://luminabot.xyz/api/json/github?username=${user}`)
      .then((r) => r.json())
      .then((f) => {
        console.log(f);
      });
  },
});
