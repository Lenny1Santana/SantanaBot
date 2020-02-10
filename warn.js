const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('Je ne trouve pas le channel mod-log');
  if (reason.length < 1) return message.reply('Tu dois écrire une raison au warn.');
  if (message.mentions.users.size < 1) return message.reply('Tu dois mentionner pour warn une personne.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`);
  return client.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'warn',
  description: 'Issues a warning to the mentioned user.',
  usage: 'warn [mention]'
};
