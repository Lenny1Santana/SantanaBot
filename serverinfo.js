const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let serverIcon = message.guild.displayAvatarURL
  let serverEmbed = new Discord.RichEmbed()
  .setDescription("Informations du serveur")
  .setColor("#15f153")
  .setThumbnail(serverIcon)
  .addField("Nom du serveur", message.guild.name)
  .addField("Crée le", message.guild.createdAt)
  .addField("Rejoint le", message.member.joinedAt)
  .addField("Membres total", message.guild.memberCount);

  message.channel.send(serverEmbed);
}

module.exports.help = {
  name : "serverinfo"
}
