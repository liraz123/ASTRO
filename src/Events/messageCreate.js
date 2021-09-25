/** @format */

const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", (client, message) => {
	if (message.author.bot) return;

	if (!message.content.startsWith(client.prefix)) return;

	const args = message.content.substring(client.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) {
		client.commands.get(cmd => cmd.aliases == args[0])
	} else {
		message.reply(`${args[0]} is not a valid command!`);
	}

	if (!["BOTH", "TEXT"].includes(command.type))
		return message.reply(
			"<a:warn_:878917634668781629> That command is only available via slash command!"
		);

	const permission = message.member.permissions.has(command.permission, true);

	if (!permission)
		return message.reply(
			`<a:warn_:878917634668781629> You do not have the permission \`${command.permission}\` to run this command!`
		);

	command.run(message, args, client);
});