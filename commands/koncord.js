const Discord = require('discord.js');


module.exports = {
  name: 'koncord',
  description: 'The K-On Discord',
  usage: '%koncord',
  
  async execute(bot, message, args) {
    message.channel.send({
      content: 'Here\'s the link of the K-On Discord server ❤️ :',
      components: [
        {
          "type": 1,
          "components": [
            {
              "type": 2,
              "style": 5,
              "label": "K-On Discord",
              "url": "https://discord.gg/kon"
            }
          ]
        }
      ]
    })
  }
}
