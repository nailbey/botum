module.exports = {
    name: 'bilgi',
    description: 'Komut listesini açar.',
    execute(message) {
        const { RichEmbed } = require('discord.js');

        let helpe = new RichEmbed() //Embeds.
            .setTitle(Gamer House Bot)
            .addField('gh!bilgi', 'Bu menüyü açar') //komutlar alt alta koy
            .addField('gh!gül', 'hareketli bir şekilde güler') //komutlar alt alta koy
            .addField('gh!ağla', 'hareketli bir şekilde ağlar') //komutlar alt alta koy
            .addField('gh!sigaraiç', 'sigara içer') //komutlar alt alta koy
            .addField('gh!çikolataye', 'çikolata yer') //komutlar alt alta koy
            .addField('gh!güldür', 'komik hikaye anlatır') //komutlar alt alta koy
            .addField('gh!vur', 'boks makinasına yumruk atar') //komutlar alt alta koy
            .addField('gh!yazı-tura-at', 'yazı tura atar') //komutlar alt alta koy
            .addField('gh!yetkililer', 'yetkilileri gösterir') //komutlar alt alta koy
            .addField('gh!website', 'nerianw sunucu sitesi'); //komutlar alt alta koy
        message.author.sendMessage({embed: helpe});
    },
};