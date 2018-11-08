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
    .setAuthor('İşte Kanal Linkim: https://www.youtube.com/channel/UCSgvyhMUM_IctkcgHLK4J7g?view_as=subscriber')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://i.ytimg.com/vi/XX-w3Juc9tU/maxresdefault.jpg`)
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
  name: 'link',
  description: 'Youtube Knalının Linkini Gösterir',
  usage: '?link'
};
