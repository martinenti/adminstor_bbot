const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`WELCOME MR_MARTIN I'M YOUR BOT NOW I'M ONLINE!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.on('message', msg => {
  if (msg.content === 'test') {
    msg.reply('البوت شغال تمام');
  }
});
  client.login(process.env.BOT_TOKEN);
