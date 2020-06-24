const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require("fs");
const config = require("./config.json");
client.on('ready', () => {
  console.log(`Ponczek wlaczony jako ${client.user.tag}!`);
client.user.setPresence({ activity: { name: 'Pilnuje serwer PONCZKI NITY.', type: "WATCHING" }})
  .then(console.log)
  .catch(console.error);
});

client.on('message', msg => {
const args = msg.content.slice(config.prefix.lenght).split(' ');
const cmd = args.shift().toLowerCase();
  switch (cmd){
      case '!zglos': {
          msg.reply(' twoje zgłoszenie zostało wysłane do administracji!');
        const embed = {
      "title": "Zgłoszenie",
      "color": 65280,
      "fields": [
        {
          "name": "- Zgłaszający:",
          "value": msg.member.displayName
        },
        {
          "name": "- Zgłaszany:",
          "value": args[0]
        },
        {
          "name": "- Powód:",
          "value": args.slice(1).join(' ')
        },
        {
          "name": "- Zgłoszony o:",
          "value": msg.createdAt
        }
      ]
    };
     client.channels.cache.get('725029303905026089').send({ embed });
      }
    
  }
});

client.login(config.token);