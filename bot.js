const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = "-"

bot.on("ready", () => {
console.log("Ready as " + bot.user.username + "#" + bot.user.discriminator);
});

bot.login("process.env.BOT_TOKEN")


bot.on("message", function(msg) {
    console.log(`${msg.author.tag} in #${msg.channel.name} = ${msg.content}`)
    if(msg.content === prefix + "happy") {
      msg.channel.send(`${msg.author} is happy 😄`)
    }
    if(msg.content === prefix + "lol") {
      msg.channel.send(`LOLOLOOLOLOLLOLOLOL`)
    }
    if(msg.content === prefix + "sad") {
      msg.channel.send(`${msg.author} is sad 😢`)
    }
    if(msg.content === prefix + "depressed") {
      msg.channel.send(`${msg.author} is gonna 😔🔫`)
    }
    if(msg.content === prefix + "ping") {
      msg.channel.send(`pinging...`).then(function(m) {
        m.edit(`Ping! Took ${m.createdTimestamp - msg.createdTimestamp}ms`)
      })
    }
    if(msg.content === prefix + "help") {
      msg.channel.send(`I have gave you a list of commands in your DMs`)
        msg.author.send(`Open the link so you can see the commands.https://pastebin.com/c5BGhbyd `)
      }
    if(msg.content === prefix + "inlove") {
      msg.channel.send(`${msg.author} is in love with someone 😍`)
    }
    if(msg.content === prefix + "thinking") {
      msg.channel.send(`${msg.author} is thinking 🤔`)
    }
    if(msg.content === prefix + "walking") {
      msg.channel.send(`${msg.author} is walking 🚶`)
    }
    if(msg.content === prefix + "dancing") {
    msg.channel.send(`${msg.author} is dancing 🕺`)
    }
    if(msg.content === prefix + "prefix") {
      msg.channel.send(`${msg.author} the prefix is -`)
    }
    if(msg.content === prefix + "creator") {
      msg.channel.send(`@Soltey#7620 has created me go give him a friend request`)
    }
    if(msg.content === prefix + "lucky") {
      msg.channel.send(`${msg.author} is feeling lucky 🍀`)
    }
    if(msg.content === prefix + "sleep") {
      msg.channel.send(`${msg.author} is sleepy 😴`)
    }
    if(msg.content === prefix + "sick") {
      msg.channel.send(`${msg.author} is sick 🤒😷`)
    }
    if(msg.content === prefix + "rainbow") {
      msg.channel.send(`${msg.author} is looking at a rainbow 🌈🌈`)
    }
    if(msg.content === prefix + "fireworks") {
      msg.channel.send(`${msg.author} is looking at fireworks 🎆🎆`)
    }
    if(msg.content === prefix + "country") {
      msg.channel.send(`${msg.author} dari Indonesia 🇮🇩`)
    }
    if(msg.content === prefix + "congrats") {
      msg.channel.send(`Congratulations 👏🎉🎆`)
    }
    if(msg.content === prefix + "traveling") {
      msg.channel.send(`${msg.author} is traveling 🏍️🚗`)
    }
    if(msg.content === prefix + "lonely") {
      msg.channel.send(`${msg.author} is feeling lonely 😞`)
    }
    if(msg.content === prefix + "language") {
      msg.channel.send(`${msg.author} This bot is the english version`)
    }
    if(msg.content ===  prefix + "version") {
      msg.channel.send(`${msg.author} We are currently in beta test mode`)
    }
    if(msg.content === prefix + "socialmedia") {
      msg.channel.send(`My social media is @KanekiBot on Instagram and @BotKanekiKen on Twitter`)
    }
    if(msg.content === prefix + "info") {
      msg.channel.send(`i'm a bot created by @Soltey#7620.I'm the english version.There is a indonesian version of me.`)
    }
    if(msg.content === prefix + "coded") {
      msg.channel.send(`i was created with Atom which is a JavaScript modifier and creator.`)
    }
    if(msg.content === prefix + "noticeme") {
  	  msg.channel.send(`I did notice you <3.`)
    }
    if(msg.content === prefix + "whoisinyourpfp") {
      msg.channel.send(`The person in my profile picture is Kaneki from Tokyo Ghoul`)
    }
    if(msg.content === prefix + "kill" + `${target.username}`) {
      msg.channel.send(`${msg.author} has killed ${target.username}`)
    }
    })
