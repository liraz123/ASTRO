/** @format */

const Discord = require("discord.js");

const Command = require("./Command.js");

const Event = require("./Event.js");

const config = require("../Data/config.js");

const intents = new Discord.Intents(32767);

const fs = require("fs");

const chalk = require("chalk");

class Client extends Discord.Client {
  constructor() {
    super({
      intents,
    });

    /**
     * @type {Discord.Collection<string, Command>}
     */
    this.commands = new Discord.Collection();

    this.prefix = config.prefix;

    this.snipes = new Discord.Collection();
  }

  start(token) {
    // Command Handler
    let slashcmd = [];

    fs.readdirSync("./src/Commands").forEach((dir) => {
      const commandFiles = fs
        .readdirSync(`./src/Commands/${dir}/`)
        .filter((file) => file.endsWith(".js"));
      const commands = commandFiles.map((file) =>
        require(`../Commands/${dir}/${file}`)
      );

      commands.forEach((cmd) => {
        console.log(`Command`, chalk.green.bold(`${cmd.name}`), `loaded`);
        this.commands.set(cmd.name, cmd);
        slashcmd.push(cmd);
      });

      const slashCommands = slashcmd
        .filter((cmd) => ["BOTH", "SLASH"].includes(cmd.type))
        .map((cmd) => ({
          name: cmd.name.toLowerCase(),
          description: cmd.description,
          permissions: [],
          options: cmd.slashCommandOptions,
          defaultPermission: true,
        }));

      // .forEach(file => {
      // 	/**
      // 	 * @type {Command}
      // 	 */
      // 	const command = require(`../Commands/${file}`);
      // 	console.log(`Command ${command.name} loaded`);
      // 	this.commands.set(command.name, command);
      // });

      // Event Handler

      this.removeAllListeners();

      this.on("ready", async () => {
        const cmds = await this.application.commands.set(slashCommands);

        cmds.forEach((cmd) =>
          console.log(`Slash Command ${cmd.name} registered`)
        );
      });
    });

    fs.readdirSync("./src/Events")
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        /**
         * @type {Event}
         */
        const event = require(`../Events/${file}`);
        console.log(`Event ${event.event} loaded`);
        this.on(event.event, event.run.bind(null, this));
      });

    this.login(token);
  }
}

module.exports = Client;
