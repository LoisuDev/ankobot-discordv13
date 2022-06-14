const Discord = require('discord.js');
const superagent =  require('superagent');
const { execute } = require('./cry');

module.exports = {
    name: 'cuddle',
    aliases: ['réconforter'],

    async execute(bot, message, args) {
        let member = message.mentions.users.first();
        let { body } = await superagent.get(`https://api.miki.bot/images/random?tags=cuddle`);


        if(!member) {
            return message.channel.send({
                embeds: [
                    {
                        color: 'e410d3',
                        title: `${message.author.username} cuddles Anko`,
                        image: {
                            url: body.url
                        },
                        footer: {
                            name: 'cuddle'
                        }
                    }
                ]
            })
        }

        message.channel.send({
            embeds: [
                {
                    color: 'e410d3',
                    title: `${message.author.username} cuddles ${member.username}`,
                    image: {
                        url: body.url
                    },
                    footer: {
                        name: 'cuddle'
                    }
                }
            ]
        })
    }
}