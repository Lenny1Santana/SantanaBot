const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.bulkDelete(1)

        var server = message.guild 
        const reason = message.content.split(" ").slice(1).join(" "); 

        if (!message.guild.roles.find("name", "Staff")) return message.channel.send(`Ce Serveur n'a pas de Role \`Staff\`, il faut le créer sinon le ticket ne peut etre ouvert.`);

        if (message.guild.channels.find("name", "ticket-" + message.author.username.toLowerCase())) return message.channel.send(`Tu as déjà un ticket ouvert`);
        if (!args[0]) return message.channel.send(`Vous devez spécifier un Problème, *ticket problème`);
        message.guild.createChannel(`ticket-${message.author.username.toLowerCase()}`, "text").then(c => {
            let category = server.channels.find(c => c.name == "Help" && c.type == "category")
            c.setParent(category.id)
            let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.member.sendMessage(`${message.author.username}, ton ticket vient d'être crée, <#${c.id}>.`);
            const embed = new Discord.RichEmbed()

                .setColor('#DC143C')
                .addField(`Raison du ticket : `, `${reason}`)
                .addField(`RedBoulle | Support `, ` Bonjour ${message.author} – ceci est une réponse automatique :
                S'il vous plaît, veuillez nous communiquer de la manière la plus précise et complète possible votre plainte, problème ou question.

                **COMMENT FORMULER UN TICKET PRÉCIS ?**
                **•** indiquer le serveur concerné.
                **•** expliquer la nature du problème.
                **•** attacher un screen et/ou record si nécessaire.

                Merci de patienter le temps qu'un membre de l'équipe soit en mesure de vous aider.

                Si vous n'avez pas d'autres questions et/ou demandes, nous vous invitons à clôturer votre ticket en cours en cliquant sur la réaction ✅.`)
                .setTimestamp();
            c.send({
                embed: embed
            }).then (function (message){
                message.react('✅')
  bot.on('messageReactionAdd', (reaction, user) => {
console.log("dans bot.on")
  if (reaction.emoji.name === "✅" && user.id !== bot.user.id) {
    c.delete()
    console.log("Delete salon") 
};           
             });
            });           
        }).catch(console.error); 
    };
    module.exports.help = {
    name: "ticket"
};
