const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'Clears the amount of messages you provided.',
    usage: '%clear <amount of messages to delete>',

   async execute(bot, message, args) {
        if(message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.channel.send({
                content: 'You can\'t do that. ERR 04'
            });
        };
        if(!args[0]) {
            return message.channel.send({
                content: 'Invalid arguments provided. ERR 01'
            })
        };
        await message.channel.bulkDelete(args[0]);
        message.channel.send({
            content: `Senpai, I just deleted ${args[0]} messages for you. >.< ♥`
        })
        message.delete();
    }
}