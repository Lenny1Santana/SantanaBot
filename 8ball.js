const Discord = module.require('discord.js');

var fortunes = [
    "**✅ Bah ouais , logique !**",
    "**❌ Non , jamais tu es fou !**",
    "**🧐 Peut-être.**",
    "**🪐 Oui bien sûr !**"
];


module.exports.run = async (bot, message, args) => {

if(!args[0]){
  return message.channel.send(":x: " + "| Merci d'entrer une question que vous voulez poser.")
}
if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
else message.channel.send(":x: " + "| Je n'ai pas pu lire ça :(");
}

module.exports.help = {
    name: "8ball"
}
