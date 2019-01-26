const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const request = require('request');
const jimp = require('jimp');
const Canvas = require('canvas');
const fs = require("fs");
const prefix = "-"


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

  



  client.login(process.env.BOT_TOKEN);
