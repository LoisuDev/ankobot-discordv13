const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: 'kiss',
    description: 'returns a kiss pic/gif.',

    async execute(bot, message, args) {
        let member = message.mentions.users.first();

        let { body } = await superagent.get(`https://nekos.life/api/kiss`);

        if(!member) {
            return message.channel.send({
                embeds: [
                    {
                        color: 'e410d3',
                        title: `${message.author.username} kisses Anko`,
                        image: {
                            url: body.url
                        },
                        footer: {
                            name: 'kiss'
                        }
                    }
                ]
            })
        }

        message.channel.send({
            embeds: [
                {
                    color: 'e410d3',
                    title: `${message.author.username} kisses ${member.username}`,
                    image: {
                        url: body.url
                    },
                    footer: {
                        name: 'kiss'
                    }
                }
            ]
        })
    }
}