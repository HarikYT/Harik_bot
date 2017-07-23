const Discord = require('discord.js');
const h1 = new Discord.Client();
const fs = require('fs');
const config = require("./Configs/HConfig.json")

let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));
var prefix = ("h!")

h1.login(config.token)


h1.on('ready', () => {
  console.log('HarikBot4 On');
});

h1.on('message', message => {
  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0,
    Username: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
  }

  if (message.content.startsWith(config.prefix + 'level')) 
  {
    message.reply(`You are currently level ${userData.level}, with ${userData.points} points. (test ${userData.Username})`);
  }
  fs.writeFile('./points.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
});

h1.on('message', message => {
  if (message.author.bot) return; // always ignore bots!

  // if the points don't exist, init to 0;
  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0,
  };
  points[message.author.id].points++;

  // And then, we save the edited file.
  fs.writeFile('./points.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
});