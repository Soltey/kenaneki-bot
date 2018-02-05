const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

bot.login("MzkzNzUwNDY0MzQ2MzI1MDA0.DR6USA.pkt2EkGTjus_kSB7Dd2ZQrJPfSs")

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
