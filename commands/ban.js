const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Bans the mentionned user. Permission required: Ban Members',
    usage: '%ban <@user [reason]',

    async execute(bot, message, args) {
        if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
            return message.channel.send({
                content: 'You can\'t do that. ERR 04'
            })
        };
        
        let member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
        if(!member) return message.channel.send({
            content: 'Invalid arguments provided. ERR 01'
        })
        if(member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.channel.send({
                content: 'You can\'t ban that person! ERR 05'
            })
        };
        let reason = args.slice(1).join(' ');
        if(!reason) reason = null;

        await member.ban({reason: reason});
        message.channel.send({
            embeds: [
                {
                    color: 'e410d3',
                    description: `***<@${member.id}> was banned.***`
                }
            ]
        })
    }
}