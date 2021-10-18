const Command = require("../../Structures/Command.js");

const Discord = require("discord.js");

const weather = require("weather-js");

module.exports = new Command({
  name: "weather",
  description: "Shows weather of the city provided.",
  permission: "SEND_MESSAGES",
  type: "BOTH",
  slashCommandOptions: [
    {
      name: "weather",
      description: "Shows weather of the city provided",
      type: "STRING",
      required: true,
    },
  ],
  async run(message, args, client) {
    let city = args.slice(1).join(" ");
    let degreetype = "C";
    weather.find(
      {
        search: city,
        degreeType: degreetype,
      },
      function (err, result) {
        if (!city) return message.channel.send("Please insert a city name!!");
        if (err || result === undefined || result.length === 0)
          return message.channel.send("Unknown city.. Please try again..");

        let current = result[0].current;
        let location = result[0].location;

        const embed = new Discord.MessageEmbed();
        embed
          .setAuthor(current.observationpoint)
          .setDescription(`> ${current.skytext}`)
          .setThumbnail(current.imageUrl)
          .setTimestamp()
          .setColor(`#00ff00`);

        embed
          .addField(
            "Latitude",
            "<a:ar:878262605154766899> " + location.lat,
            true
          )
          .addField(
            "Longitude",
            "<a:ar:878262605154766899> " + location.long,
            true
          )
          .addField(
            "Feels Like",
            "<a:ar:878262605154766899> " + `${current.feelslike}°C`,
            true
          )
          .addField(
            "Winds",
            "<a:ar:878262605154766899> " + current.winddisplay,
            true
          )
          .addField(
            "Humidity",
            "<a:ar:878262605154766899> " + `${current.humidity}%`,
            true
          )
          .addField(
            "Timezone",
            "<a:ar:878262605154766899> " + `GMT ${location.timezone}`,
            true
          )
          .addField(
            "Temperature",
            "<a:ar:878262605154766899> " + `${current.temperature}°C`,
            true
          )
          .addField(
            "Observation Time",
            "<a:ar:878262605154766899> " + current.observationtime,
            true
          );

        return message.reply({
          embeds: [embed],
        });
      }
    );
  },
});
