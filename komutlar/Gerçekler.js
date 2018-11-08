const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Koca Yürekli ' + message.author.username + ' Yanlış Anlamayın')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://st2.depositphotos.com/4492993/10820/i/950/depositphotos_108204298-stock-photo-turkish-lira-iron-money-1.jpg`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'Gerçekler',
  description: 'Gerçekler',
  usage: 'Gerçekler'
};
