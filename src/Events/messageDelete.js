const Event = require("../Structures/Event.js");

module.exports = new Event("messageDelete", (client, message) => {
  let snipes = client.snipes.get(message.channel.id) || [];
  if (snipes.length > 5) snipes = snipes.slice(0, 4);

  snipes.unshift({
    msg: message,
    image: message.attachments.first()?.proxyURL || null,
    time: Date.now(),
  }),
    client.snipes.set(message.channel.id, snipes);
});
