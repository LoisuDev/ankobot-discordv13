const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: 'hug',
    aliases: ['câlin', 'calin'],
    description: 'returns a hug pic/gif.',

    async execute(bot, message, args) {
        let member = message.mentions.users.first();
        let { body } = await superagent.get(`https://nekos.life/api/hug`);
        if(!member) {
            return message.channel.send({
                embeds: [
                    {
                        color: 'e410d3',
                        title: `${message.author.username} hugs Anko`,
                        image: {
                            url: body.url
                        },
                        footer: {
                            name: 'hug'
                        }
                    }
                ]
            })
        }
        message.channel.send({
            embeds: [
                {
                    color: 'e410d3',
                    title: `${message.author.username} hugs ${member.username}`,
                    image: {
                        url: body.url
                    },
                    footer: {
                        name: 'hug'
                    }
                }
            ]
        })
    }
}