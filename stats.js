const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    // if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }

    message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Statistiques du Follower **${membre.user.username}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                    name: 'ID :',
                    value: membre.id 
                },
                {
                    name: 'Crée le :',
                    value: moment.utc(membre.user.createdAt).format("LL")
                },
                {
                    name: 'Jeu :',
                    value: membre.user.presence.game ? membre.user.presence.game.name : 'Aucun jeu'
                },
                {
                    name: 'Abonné depuis le :',
                    value: moment.utc(membre.joinedAt).format('LL')
                }
            ],
            footer: {
                text: `Informations du Follower ${membre.user.username}`
            }
        }
    });
};

module.exports.help = {
    name: 'stats'
};
