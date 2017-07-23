const Discord = require('discord.js');
const h1 = new Discord.Client();
const config = require("./Configs/HConfig.json")

var prefix2 = ('h!!');

h1.login(config.token)

h1.on("message", message => {
  if (message.content.startsWith(prefix2 + "stop")) {
  	message.channel.sendMessage("Turning off")
  	h1.destroy((err) => {
        console.log(err);
    });
}
});

h1.on('ready', () => {
  console.log('HarikBot3 On');
});