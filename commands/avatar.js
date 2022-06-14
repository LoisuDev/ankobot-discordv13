const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp', 'pp'],
    description: 'Returns your avatar or the one of the user you mentionned',

    async execute(bot, message, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;
        let avatar = member.avatarURL({size: 1024});

        message.channel.send({
            embeds: [
                {
                    color: 'e410d3',
                    title: `${member.username}'s Avatar:`,
                    image: {
                        url: avatar
                    },
                    footer: {
                        name:'avatar'
                    }
                }
            ]
        })
    }
}