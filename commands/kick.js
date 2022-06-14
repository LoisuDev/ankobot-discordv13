const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
    name: 'kick',
    aliases: ['virer'],
    description: 'kicks the mentionned member. Permission required: Kick Members',
    usage: '%kick <@user> [reason]',

    async execute(bot, message, args) {
        if(!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
            return message.channel.send({
                content: 'You can\'t do that. ERR 04'
            });
        };

        let member = message.mentions.members.first();

        if(!member) {
            message.channel.send({
                content: 'Invalid arguments provided. ERR 01'
            });
        };

        if(member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            return message.channel.send({
                content: 'You can\'t kick that user. ERR 05'
            });
        };

        let reason = args.slice(1).join(' ');
        if(!reason) reason = null;

        await member.kick({reason: reason});
        message.channel.send({
            embeds: [
                {
                    color: 'e410d3',
                    description: `***<@${member.id} was kicked.>***`
                }
            ]
        })
    }
}