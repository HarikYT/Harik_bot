const Discord = require('discord.js');
const h1 = new Discord.Client();
const moment = require('moment')
require('moment-duration-format')
const config = require("./Configs/HConfig.json")
const Sbot = require("./Configs/pharik.json")
const chalk = require("chalk")
const DC = new Discord.Client();
const WebHook = new Discord.WebhookClient("319777312277004288", "6ejyrVnU2I_tb9hySGPncIXzmUhtTF49ShfOT_PCPBdzLz-dFWotXbBNnJ_lip7eMQHM");

// Use npm install <pkg> --save afterwards to install a package and save it as a dependency in the package.json file.

var Ownerid = ('224217063458078730')
var CoOwnerid = ('223537608041562113')
let modlog = h1.channels.find('name', 'mod-log');
var vid = ("0.0.9")

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

h1.login(config.token)

h1.on('ready', () => {
  console.log(chalk.bgBlue(`HarikBot1 On ${h1.user.name} ${h1.user.id}`));
  h1.user.setGame(`Being Tested | ${h1.guilds.size} guilds!` ,"https://twitch.tv/harikyt", 1 );
})


h1.on('ready', () => {
    h1.user.setStatus('offline');
});

h1.on("message", message => {
  if (message.content.startsWith(config.prefix2 + "stop")) {
    h1.destroy((err) => {
        console.log(err);
    });
}

if (message.content.startsWith(config.prefix + "del")) {
   if(message.author.id !== Ownerid) return;
	 var usernumber = message.content.split(' ').slice(1).join(' ');
	 message.delete(100000)
	 message.channel.bulkDelete(usernumber)
   
}

  if (message.content.startsWith(config.prefix2 + "test")) {
    message.channel.send("Test Complete. Thank you for using harik bot. I really appreciate it!");
    message.channel.send("If you have any problems please contact @HarikYT#9974 thx")
  }



  if (message.content.startsWith(config.prefix + "ideas?")) {
   message.channel.send("Any ideas for me?")
   message.channel.send("i would appreciate them all :D")
  }



 if (message.content.startsWith(config.prefix2 + "helpRIP")) {
   message.channel.send("Help Message Sent!")
   message.author.send("My Commands are:")
   message.author.send("Prefix 1: ideas,del(w.i.p do not use)and ping")
   message.author.send("Prefix 2: Test")
   message.author.send("Thats it for now. Thanks for using harik bot :) ")
  }



 if (message.content.startsWith(config.prefix + "AddC")) {
   message.content.split(' ').slice(1).join(' ');
   function makeChannel(message){
    var server = message.guild;
    var name = message.author.username;

    server.createChannel(name, "text");
  }
}



  if (message.content.startsWith(config.prefix + "test")) {
    message.channel.send("sorry its h!!test");
  }

  if (message.content.startsWith(config.prefix + "SendTGP")) {
    var usertext = message.content.split(' ').slice(1).join(' ');
  h1.channels.get("226009593719816193").send(usertext)
}


  if (message.content.startsWith(config.prefix + "help")) {
  const embed = new Discord.RichEmbed()
  .setTitle("Da Best Commands")
  .setColor(0x00AE86)
  .addField("info", `Shows some info about the bot.`)
  .addField("status", `Shows status like amount of guids, users and uptime.`)
  .addField("invite", `Outputs the invite link to invite the bot to the server.`)
  .addField("tgp", `Outputs and invite to a server where you can find the owner talk most.`)
  .addField("uptime", `This just shows the bots uptime.`)
  .addField(`Please can you make an invite link and send it to ${config.owner} so my owner can join thx`)
  .setFooter()
  .setFooter(`${moment.duration(h1.uptime).format("D [days], H [hrs], m [mins], s [secs] ")}` + vid)
 message.channel.sendEmbed(embed);
}
   const swearWords = ["darn", "shucks", "frak", "shite", "ded"];
  if(swearWords.some(word => message.content.includes(word)) ) {
    message.delete(1)
    console.log(`${message.author.username} sweared!`)
  }
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
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      console.log(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }

  if (message.content.startsWith(config.prefix + "Guild_Owner")) {
    if(message.author.id !== DC.user.id) return;
    var usertext = message.content.split(' ').slice(1).join(' ');
    message.channel.send(`eval h1.users.get("${usertext}").send("")`)
  }

if(message.content.startsWith(config.prefix + "todo"))
 if(!message.author.id === "224217063458078730") return
    var usertext = message.content.split(' ').slice(1).join(' ');
    var fs = require('fs');
    fs.appendFile('todo.txt', `${usertext}\r\n`, function (err) {
  if (err) throw err;
  console.log('Saved ToDo!');
});


DC.on("message", message => {
 if (message.content.startsWith(Sbot.prefix + "Invite")) { 
 if (message.author.id !== DC.user.id) return;
  var usertext = message.content.split(' ').slice(1).join(' ');
  var username = DC.users.get(usertext).username
  message.edit(`https://discordapp.com/api/oauth2/authorize?client_id=${usertext}&scope=bot&permissions=0`)
  message.channel.send(`btw ${usertext} is ${username}`)
 }


 if (message.content.startsWith("Username")) {
 if (message.author.id !== DC.user.id) return;
  var usertext = message.content.split(' ').slice(1).join(' ');
  var username = DC.users.get(usertext).tag
  message.edit(`it is ${username}`)
 }

 if (message.content.startsWith("ID")) {
 if (message.author.id !== DC.user.id) return;
 var usertext = message.content.split(' ').slice(1).join(' ');
 var userid = DC.users.get(usertext).id
 message.edit(userid)
 console.log(userid)
}
if (message.content.startsWith(Sbot.prefix + "eval")) {
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
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      console.log(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
  if (message.content.startsWith(Sbot.prefix + "kick")) {
  let modlog = h1.channels.find('name', 'mod-log'); 
  let member = message.mentions.members.first();
  let reason = message.content.split(/\s+/g).slice(2).join(" ");
 if (!message.guild.member(user).kickable) return message.reply('I cannot kick that member');
  message.guild.member(user).kick(reason);
  const kick = new Discord.RichEmbed()
  .setTitle("Kicked")
  .setColor(0x00AE86)
  .addField("User", `${member}`)
  .addField("Moderator", `${message.author.username}`)
  .addField("Reason", `${reason}`)
  .setFooter()
 h1.channels.get(modlog.id).sendEmbed(kick);
 if (!modlog) return message.reply('I cannot find a mod-log channel');
 if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);
}
if(message.content.startsWith(Sbot.prefix + "ban")) {
  let member = message.mentions.members.first();
  let reason = message.content.split(/\s+/g).slice(2).join(" ");
  member.ban(reason);
  const ban = new Discord.RichEmbed()
  .setTitle("Banned")
  .setColor(0x00AE86)
  .addField("User", `${member}`)
  .addField("Moderator", `${message.author.username}`)
  .addField("Reason", `${reason}`)
  .setFooter()
 h1.channels.find('name', 'mod-log').sendEmbed(ban);
}
if(message.content.startsWith(Sbot.prefix + "unban")) {
  let member = message.mentions.members.first();
member.unban();
const unban = new Discord.RichEmbed()
  .setTitle("Unbanned")
  .setColor(0x00AE86)
  .addField("User", `${member}`)
  .addField("Moderator", `${message.author.username}`)
  .setFooter()
 h1.channels.find('name', 'mod-log').sendEmbed(unban);
}
 if(message.content.startsWith(Sbot.prefix + "announce")) {
 if (message.author.id === DC.user.id || message.author.bot) return;
var usertext = message.content.split(" ").slice(1).join(" ")
WebHook.send(usertext)
}
if(message.content.startsWith(Sbot.prefix + "warn")) {
  let member = message.mentions.members.first();
  let reason = message.content.split(/\s+/g).slice(2).join(" ")
 const warn = new Discord.RichEmbed()
  .setTitle("Warned")
  .setThumbnail("harik.elementfx.com/Files/Index%20icons/Warn.png")
  .setColor(0x00AE86)
  .addField("User", `${member}`)
  .addField("Moderator", `${message.author.username}`)
  .addField("Reason", `${reason}`)
  .setFooter()
 h1.channels.find('name', 'mod-log').sendEmbed(warn);
}
});

DC.on('ready', () => {
console.log(chalk.bgBlue("get fricken reckt!!!")); 
});
DC.login(Sbot.token)
/*h1.on("message", message => {
  if (message.content.startsWith(config.prefix2 + "ban"))
 var reason = args.slice(1).join(' ');
 var user = message.mentions.users.first();
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the ban.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Ban\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
  return client.channels.get(modlog.id).send({embed});
});*/

/*h1.on("message", message => {

 if(!message.member.roles.has(modRole.id)) {
  return message.reply(":| You Dont Have Permission To Do This");
  
 }
 if(message.mentions.users.size === 0) {
 return message.reply("Mention Someone(A Idiots Mistake)");
 }
 let kickMember = message.guild.member(message.mentions.users.first());
 if(!kickMember) {
 return message.reply("Invalid")
 }
 if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
 return message.reply("I Do Not Have The Permission To Kick");
 }
 kickMember.kick().then(member => {
return message.reply(`${message.user.username} Just Got Kicked`); 
}).catch(console.error)
})*/

/*h1.on("message", message => {
  const embed = new Discord.RichEmbed()
  .setTitle('Help')
  .setAuthor('HarikYT', 'https://cdn.discordapp.com/avatars/224217063458078730/c9a2ec3303d6103ff3e75720b5dfbf68.png')
  .setColor(0x00AE86)
  .setDescription('This is the main body of text, it can hold 2048 characters.')
  .setImage('https://cdn.discordapp.com/avatars/224217063458078730/c9a2ec3303d6103ff3e75720b5dfbf68.png')
  .setThumbnail('https://cdn.discordapp.com/avatars/224217063458078730/c9a2ec3303d6103ff3e75720b5dfbf68.png')
  .setURL('https://discord.js.org/#/docs/main/indev/class/RichEmbed')
  .addField('This is a field title, it can hold 256 characters', 'This is a field value, it can hold 2048 characters.')
 return message.channel.send({embed}).catch(console.error);
});*/

// h1.on("", => {
});