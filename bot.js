const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const { stripIndents, oneLine } = require('common-tags');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('**Aleyküm Selam,Knk Hoşgeldin**');
  }
});



client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi geceler') {
    msg.reply('**İyi Geceler Knk**');
    msg.react("🌙")
  }
});

client.on('message', msg => {
  if (msg.content === 'c!sigaraiç') {
    msg.channel.send(':smoking: :cloud::cloud::cloud: :cloud::cloud::cloud::cloud: ')
      .then(nmsg => nmsg.edit(':smoking: :cloud::cloud: :cloud::cloud: '))
      .then(nmsg => nmsg.edit(':smoking: :cloud: :cloud: :cloud:'))
      .then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
      .then(nmsg => nmsg.edit(':smoking: :cloud:'))
      .then(nmsg => nmsg.edit('Sigaram bitti'))
      .then(nmsg => nmsg.edit('Sigara İçmeyiniz. :no_smoking: :no_smoking: :no_smoking: :no_smoking: '));
  }
});
client.on('message', msg => {
if (msg.content === 'gh!indir') {
     msg.channel.send('İndiriliyor: [✓=========] 10%')
     .then(nmsg => nmsg.edit('İndiriliyor: [✓✓========] 20%'))
     .then(nmsg => nmsg.edit('İndiriliyor: [✓✓✓=======] 30%'))
     .then(nmsg => nmsg.edit('İndiriliyor: [✓✓✓✓======] 40%'))
     .then(nmsg => nmsg.edit('İndiriliyor: [✓✓✓✓✓=====] 50%'))
     .then(nmsg => nmsg.edit('İndiriliyor: [✓✓✓✓✓✓====] 60%'))
     .then(nmsg => nmsg.edit('İndiriliyor: [✓✓✓✓✓✓✓===] 70%'))
     .then(nmsg => nmsg.edit('İndiriliyor: [✓✓✓✓✓✓✓✓==] 80%'))
     .then(nmsg => nmsg.edit('İndiriliyor: [✓✓✓✓✓✓✓✓✓=] 90%'))
     .then(nmsg => nmsg.edit('İndiriliyor: [✓✓✓✓✓✓✓✓✓✓] 100%'))
     .then(nmsg => nmsg.edit('**İndirilmiştir!**'));
  }
});

client.on('message', msg => {
if (msg.content === 'c!gül') {
     msg.channel.send(':smile: :smile: :smile: :smile: :smile: :smile: :smile: :smile: :smile: :smile:')
     .then(nmsg => nmsg.edit(' :smile: :smile: :smile: :smile: :smile: :smile: :smile: :smile: :smile:'))
     .then(nmsg => nmsg.edit(' :smile: :smile: :smile: :smile: :smile: :smile: :smile: :smile:'))
     .then(nmsg => nmsg.edit(' :smile: :smile: :smile: :smile: :smile: :smile: :smile:'))
     .then(nmsg => nmsg.edit(' :smile: :smile: :smile: :smile: :smile: :smile:'))
     .then(nmsg => nmsg.edit(' :smile: :smile: :smile: :smile: :smile:'))
     .then(nmsg => nmsg.edit(' :smile: :smile: :smile: :smile:'))
     .then(nmsg => nmsg.edit(' :smile: :smile: :smile:'))
     .then(nmsg => nmsg.edit(' :smile: :smile:'))
     .then(nmsg => nmsg.edit(' :smile:'))
     .then(nmsg => nmsg.edit('Gülmekten Öldüm lan hahahahaha  :smile:'));
     msg.react("👍🏽")
     msg.react("👎🏽")


  }
});

client.on('message', msg => {
if (msg.content === 'c!ağla') {
     msg.channel.send(':sob: :sob: :sob: :sob: :sob: :sob: :sob: :sob: :sob: :sob: :sob: :sob: ')
     .then(nmsg => nmsg.edit(':sob: :sob: :sob: :sob: :sob: :sob: :sob: :sob: :sob:  '))
     .then(nmsg => nmsg.edit(':sob: :sob: :sob: :sob: :sob: :sob: :sob: :sob: '))
     .then(nmsg => nmsg.edit(':sob: :sob: :sob: :sob: :sob: :sob: :sob: '))
     .then(nmsg => nmsg.edit(':sob: :sob: :sob: :sob: :sob: :sob: '))
     .then(nmsg => nmsg.edit(':sob: :sob: :sob: :sob: :sob: '))
     .then(nmsg => nmsg.edit(':sob: :sob: :sob: :sob: '))
     .then(nmsg => nmsg.edit(':sob: :sob: :sob: '))
     .then(nmsg => nmsg.edit(':sob: :sob: '))
     .then(nmsg => nmsg.edit(':sob: '))
     .then(nmsg => nmsg.edit(':sob: **BENİ AĞLATIN  BİDAHA AĞLAMICAM İNŞ**  :sob: '));
  }
});
client.on('message', msg => {
if (msg.content === 'c!website') {
     msg.channel.send(' YOK ')
  }
});
client.on('message', msg => {
if (msg.content === 'c!mail') {
     msg.channel.send('bayhollandali@gmail.com ')

  }
});
client.on('message', msg => {
if (msg.content === 'c!youtube') {
     msg.channel.send(':sob: :sob: :sob: :sob: :sob: :sob: :sob: :sob: :sob: :sob: :sob: :sob: ')

  }
});

client.on('message', msg => {
  if (msg.content === 'c!sigaraiç') {
    msg.channel.send(':smoking: :cloud::cloud::cloud: :cloud::cloud::cloud::cloud: ')
      .then(nmsg => nmsg.edit(':smoking: :cloud::cloud: :cloud::cloud: '))
      .then(nmsg => nmsg.edit(':smoking: :cloud: :cloud: :cloud:'))
      .then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
      .then(nmsg => nmsg.edit(':smoking: :cloud:'))
      .then(nmsg => nmsg.edit('Sigaram bitti'))
      .then(nmsg => nmsg.edit('Sigara İçmeyiniz. :no_smoking: :no_smoking: :no_smoking: :no_smoking: '));
  }
});



client.on('message', msg => {
if (msg.content === 'c!çikolataye') {
     msg.channel.send(':chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar:')
     .then(nmsg => nmsg.edit(':chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar:'))
     .then(nmsg => nmsg.edit(':chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar:'))
     .then(nmsg => nmsg.edit(':chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar:'))
     .then(nmsg => nmsg.edit(':chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar:'))
     .then(nmsg => nmsg.edit(':chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar:'))
     .then(nmsg => nmsg.edit(':chocolate_bar: :chocolate_bar: :chocolate_bar: :chocolate_bar:'))
     .then(nmsg => nmsg.edit(':chocolate_bar: :chocolate_bar: :chocolate_bar:'))
     .then(nmsg => nmsg.edit(':chocolate_bar: :chocolate_bar:'))
     .then(nmsg => nmsg.edit(':chocolate_bar:'))
     .then(nmsg => nmsg.edit(':chocolate_bar: **Çikolatam Bitti Bidaha Ver**:pensive: :chocolate_bar:'));
  }
});
client.on('message', msg => {
if (msg.content === 'c!steam') {
     msg.channel.send('http://steamcommunity.com/groups/ejderyagaming')
  }
});
client.on('message', msg => {
if (msg.content === 'c!discord') {
     msg.channel.send('https://discord.gg/GGzPecN')
  }
});
client.on('message', msg => {
if (msg.content === 'c!whatsapp') {
     msg.channel.send('BAKIMDA')
  }
});
client.on('message', msg => {
if (msg.content === 'rc!instagram') {
     msg.channel.send('https://www.instagram.com/can_shn42/')
  }
});

https://www.instagram.com/fatihcan.elmastas/
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login('TOKEN GIR');

client.on("message", message => {

    const kufur = ["amk","sik","anan","orospu","piç","yarrak","s2k","siktir","orosbu çocuğu", "pezenek", "andaval", "göt" ];
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply("**Küfür Etme!** :rage:")
        message.delete()
    }});




    client.on("message", message => {

        const reklam = ["discord.gg"];
        if (reklam.some(word => message.content.includes(word)) ) {
            message.reply("**Reklam Yapma!** :rage:")
            message.delete()
        }});
