
const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = "-"

bot.on("ready", () => {
console.log("Ready as " + bot.user.username + "#" + bot.user.discriminator);
});

bot.login("MzkzNzUwNDY0MzQ2MzI1MDA0.DR6USA.pkt2EkGTjus_kSB7Dd2ZQrJPfSs")

client.login(process.env.BOT_TOKEN);
