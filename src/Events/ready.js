/** @format */

const config = require("../Data/config.json")

const Event = require("../Structures/Event.js");

module.exports = new Event("ready", client => {
	console.log(`${client.user.tag} is ready!`);
	const arrayOfStatus = [
		`📡 ${client.guilds.cache.size} servers 🛰️`,
		`Prefix [${config.prefix}]`,
		`👩🏻 ${client.users.cache.size} users 👦🏻`
	];

	let index = 0;
	setInterval(() => {
		if (index === arrayOfStatus.length) index = 0;
		const status = arrayOfStatus[index];
		client.user.setActivity(status, {
			type: 'WATCHING'
		});
		index++;
	}, 3000); //in ms
});