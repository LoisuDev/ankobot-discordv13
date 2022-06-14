const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: 'cry',
    aliases: ['pleurer', 'sad', 'triste'],
    description: 'You\'re sad?!',

    async execute(bot, message, args) {
        let member = message.mentions.users.first();
        let { body } = await superagent.get(`https://api.miki.bot/images/random?tags=cry`);

        if(!member) {
            return message.channel.send({
                embeds: [
                    {
                    color: 'e410d3',
                    title: `${message.author.username} cries at Anko`,
                    image: {
                        url: body.url
                    },
                    footer: {
                        name: 'cry'
                    }
                }]
            })
        }

        message.channel.send({
            embeds: [
                {
                    color: 'e410d3',
                    title: `${message.author.username} cries at ${member.username}`,
                    image: {
                        url: body.url
                    },
                    footer: {
                        name: 'cry'
                    }
                }
            ]
        })
    }
}