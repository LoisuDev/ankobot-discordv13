const Discord = require('discord.js');

module.exports = {
    name: '8ball',
    aliases: ['8b'],
    description: 'Ask me a question, and I will answer by yes, no, or maybe.',
    usage: '%8ball <question>',

    execute(bot, message, args) {
        if(!args[1]) return message.channel.send({content: "Please ask a question!"});

        let replies = ['Yes', 'No', "Maybe"];
        let question = args.slice(0).join(' ');
        let res = Math.floor((Math.random() * replies.length));

        message.channel.send({
            embeds: [
                {
                    color: "e410d3",
                    author: {
                        name: message.author.tag
                    },
                    title: "8 Ball ♥",
                    thumbnail: {
                        url: message.author.avatarURL()
                    },
                    fields: [
                        {
                            name: 'Question:',
                            value: question
                        },
                        {
                            name: 'Answer:',
                            value: replies[res]
                        }
                    ]
                }
            ]
        })
    }
}