const Discord = require('discord.js');


module.exports = {
    name: 'nickname',
    description: 'changes your nickname or leaves it blank.',
    usage: '%nickname <nickname>',

    async execute(bot, message, args) {
        let member = message.mentions.members.first() || message.guild.members.fetch(args[0]);
        if(!member) {
            let nickname = args.join(" ");
            if(!args.length) nickname = null;

            try {
                message.member.setNickname(nickname)
            } catch(error) {
                message.channel.send({
                content: error
                })
            }
        }

        let nickname = args.slice(1).join(' ');
        if(!nickname) nickname = null;

        try {
            member.setNickname(nickname)
        } catch(error) {
            message.channel.send({
            content: error
            })
        }
    }
}