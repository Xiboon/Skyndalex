const request = require("request");
const Discord = require("discord.js");
exports.run = (client, message, args, level) => {
  try {
    request(`https://some-random-api.ml/img/panda`, function(
      error,
      response,
      body
    ) {
      let json = JSON.parse(body);
      const tekstemb = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Pandaaa!")
        .setImage(json.link || "BRAK")
        .setTimestamp();
      message.channel.send(tekstemb);
      return;
    });
  } catch (err) {
    const txtemb = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Error: " + err);
    return message.channel.send(txtemb);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pandy"],
  permLevel: "Użytkownik"
};

exports.help = {
  name: "panda",
  category: "🎉 | 4fun",
  description: "Pokazuje zdjęcie pandy!",
  usage: "panda"
};
