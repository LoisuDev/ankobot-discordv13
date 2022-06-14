const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: 'blush',
    aliases: ['rougir'],

    async execute(bot, message, args) {
        return message.channel.send({
            content: 'That command is currently unavailable.'
        })
        let member = message.mentions.users.first();
        let { body } = await superagent.get(`https://shiro.gg/api/images/blush`);

        if(!member) return message.channel.send({
            embeds: [
                {
                    color: 'e410d3',
                    title: `${message.author.username} blushes at Anko`,
                    image: {
                        url: body.url
                    },
                    footer: {
                        name: 'blush'
                    }
                }
            ]
        })

        message.channel.send({
            embeds: [
                {
                    color: 'e410d3',
                    title: `${message.author.username} blushes at ${member.username}`,
                    image: {
                        url: body.url
                    },
                    footer: {
                        name: 'blush'
                    }
                }
            ]
        })
    }
}