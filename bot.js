const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'zach ping') {
    message.channel.send('took me this long to respond: ' + Math.round((resMsg.createdTimestamp - msg.createdTimestamp) - bot.ping))
  }

  if (msg.content === 'zach help') {
    message.channel.send('HELP')
  }

})
client.login('NjUxMjMzNjEyODM4MjA3NDg5.XeW7EA.LFd_j0kARIqZGgcUxyzdmfN6fyg')