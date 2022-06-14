const Discord = require('discord.js');
const superagent = require('superagent');


module.exports = {
    name: 'nom',
    aliases: ['manger'],
    description: 'I can tell you are hungry, don\'t you?',

    async execute(bot, message, args) {
        return message.channel.send({
            content: 'That command is currently unavailable.'
        })

        let { body } = await superagent.get(``)
    }
}