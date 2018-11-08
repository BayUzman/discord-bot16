const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Oğuzhan Dağlı**")
        .setImage("https://i.ytimg.com/vi/XX-w3Juc9tU/maxresdefault.jpg")
        .setThumbnail("https://i.ytimg.com/vi/XX-w3Juc9tU/maxresdefault.jpg")
        .setColor(0x00AE86)
        .addField("Lakabı", "BayUzman", true)
        .addField("Sunucu Adı", `
        *BayUzman
   *Sunucusu
   `, true)
   .addField("Arada", `Gta 5i Sever`, true)
   .addField("Selam", "Naber")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'kurucubilgi', 
  description: 'Botun Kurucusu Hakkında Bilgi Verir',
  usage: '//kullanıcıbilgi'
};
