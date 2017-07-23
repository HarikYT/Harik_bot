const Discord = require('discord.js');
const h1 = new Discord.Client();
const config = require("./Configs/HConfig.json")

var prefix = ('h!')
var prefix2 = ('h!!');
var Ownerid = ('224217063458078730')
var CoOwnerid = ('223537608041562113')

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

h1.login(config.token)

h1.on('ready', () => {
  console.log('HarikBot2 On');
  h1.user.setGame(`Being Derpy | ${h1.guilds.size} guilds!`);
})

h1.on("message", message => {
  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.sendMessage("pong!");
  }

h1.on('message', message => {
    var usertext = message.content.split(' ').slice(0).join(' ');
    console.log(`User: ${message.author.username} Said: ` + usertext);
    var fs = require('fs');
    fs.appendFile('harik_bot.txt', `User: ${message.author.username} Said: ${usertext}\r\n`, function (err) {
  if (err) throw err;
  console.log('Done!');
});

h1.on("message" , message => {
if (message.content.startsWith(config.prefix + "say")) {
    
	if(message.author.id !== Ownerid) return;
	
	var usertext = message.content.split(' ').slice(1).join(' ');
          
    message.delete(1);
     message.channel.startTyping();
	  setTimeout(() => {
	   message.channel.sendMessage(usertext)
	 message.channel.stopTyping();
	}, Math.random() * (0 - 20) + 1 * 2000);
 }
});

h1.on('message', message => {
if (message.content.startsWith(config.prefix + "eval")) {
  message.delete(1);

  const args = message.content.split(" ").slice(1);
  
  if(message.author.id !== "224217063458078730") return;
  
  try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      console.log(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

h1.on("message", message => {
  if (message.content.startsWith(config.prefix2 + "stop")) {
  	h1.destroy((err) => {
        console.log(err);
    });
}
});
});
});