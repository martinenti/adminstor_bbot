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

if(cmd ==="-report"){
        let wUser = message.guild.member (message.mentions.users.first())  message.guild.members.get(args[0]);
          if(!wUser) return message.reply("يجب ان تمنشن شخص اول")
    let reason = args.join(" ").slice(22);

message.channel.send("تم ارسال  الشكوى  الى الادارة العليا  ")

   let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
  .addField("reoprt user",${wUser} with id ${wUser.id})
  .addField("reoprt by",${message.author} with id ${message.author.id})
  .addField("channel",message.channel)
  .addField("TIME",message.createdAt)
  .addField("Reson",reason)


  let warnchannel = message.guild.channels.find(name,"report")
  if(!warnchannel) return message.reply("لا يجود الشات ")

  message.delete().catch(O_o=>{})
  warnchannel.send(embed);

  client.login(process.env.BOT_TOKEN);
